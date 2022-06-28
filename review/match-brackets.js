const { Stack } = require("../tools/stack");

function matchBrackets(str) {
  const arr = str.split("");
  const stack = new Stack();
  const dic = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (const i of arr) {
    if (dic[i]) {
      const top = stack.pop();
      if (dic[i] !== top) {
        return false;
      }
    } else {
      stack.push(i);
    }
  }
  return stack.size() === 0;
}

const result1 = matchBrackets("{[()]}");
const result2 = matchBrackets("{{[()]}");
console.log(result1);
console.log(result2);
