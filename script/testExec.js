const fsp = require('fs/promises');
const path = require('path');
const { exec } = require('child_process');

function execFunc(cmd) {
  return new Promise((resolve) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.log('\x1b[31m', `error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log('\x1b[31m', `stderr: ${stderr}`);
        return;
      }
      console.log('\x1b[32m', `stdout:\n${stdout}`);
      resolve();
    });
  });
}

async function test() {
  const basePath = path.resolve(__dirname, '../src');
  const fileList = await fsp.readdir(basePath);
  for (let i = 0; i < fileList.length; i++) {
    const filePath = path.resolve(basePath, fileList[i]);
    const stats = await fsp.stat(filePath);
    const isDir = stats.isDirectory();
    if (!isDir) {
      await execFunc(`node ${filePath}`);
    }
  }
}

(async () => {
  await test();
})();
