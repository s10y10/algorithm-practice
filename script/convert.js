const { parse } = require('@babel/parser');
const t = require('@babel/types');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const fsp = require('fs/promises');
const path = require('path');

function getRequireTestStatement() {
  const requireStatement = t.variableDeclaration('const', [
    t.variableDeclarator(
      t.objectPattern([
        t.objectProperty(t.identifier('test'), t.identifier('test')),
      ]),
      t.callExpression(t.identifier('require'), [
        t.stringLiteral('./tools/test'),
      ])
    ),
  ]);
  return requireStatement;
}

async function convertFile(filename) {
  //读取文件内容,生成ast
  const code = (await fsp.readFile(filename)).toString();
  const ast = parse(code);
  //遍历ast
  //1.判断是否require了test
  //2.清理最下面的那些执行语句并替换成使用test执行
  let hasRequireTest = false;
  const functionNames = [];
  const inputValues = [];
  traverse(ast, {
    FunctionDeclaration(path) {
      functionNames.push(path.node.id.name);
    },
    CallExpression(path) {
      const calleeName = path.node.callee.name;
      if (calleeName === 'require') {
        const requireStatement = path.node.arguments[0].value;
        if (requireStatement.includes('/test')) {
          hasRequireTest = true;
        }
      } else if (path.get('callee').matchesPattern('console', true)) {
        path.remove();
      }
    },
    VariableDeclarator(path) {
      if (path.node.id.name.includes('input')) {
        inputValues.push(path.node.id.name);
      } else if (path.node.id.name.includes('result')) {
        path.remove();
      }
    },
  });

  // 插入require('test')语句
  if (!hasRequireTest && functionNames.length) {
    const requireStatement = getRequireTestStatement();
    const body = ast.program.body;
    body.splice(0, 0, requireStatement);

    for (let i = 0; i < inputValues.length; i++) {
      const expressionStatement = t.expressionStatement(
        t.callExpression(t.identifier('test'), [
          t.identifier(functionNames[functionNames.length - 1]),
          t.identifier(inputValues[i]),
        ])
      );
      body.push(expressionStatement);
    }

    // 生成修改后代码
    const newCode = generate(ast).code;
    await fsp.writeFile(`${filename}-convert.js`, newCode);
  }
}

async function convert() {
  const basePath = path.resolve(__dirname, '../src');
  const fileList = await fsp.readdir(basePath);
  for (let i = 0; i < fileList.length; i++) {
    const filePath = path.resolve(basePath, fileList[i]);
    const stats = await fsp.stat(filePath);
    const isDir = stats.isDirectory();
    if (!isDir) {
      await convertFile(filePath);
      break;
    }
  }
}

(async () => {
  await convert();
})();
