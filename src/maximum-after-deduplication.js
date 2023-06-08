//一个长整型数字，消除重复的数字后，得到最大的一个数字。

//如 12341 ，消除重复的 1，可得到 1234 或 2341，取最大值 2341。

//如 42234，消除 4 得到 4223 或者 2234 ，再消除 2，得到 423 或 234，取最大值 423。

//输入
//输入一个数字，范围 [1, 100000]

//输出
//输出经过删除操作后的最大值

const { test } = require('./tools/test');
const { Stack } = require('./tools/stack');

function maximumAfterDeduplication(originNum) {
  const numStr = `${originNum}`;
  const objCount = {};
  for (let char of numStr) {
    if (objCount[char] === undefined) {
      objCount[char] = 0;
    }
    objCount[char]++;
  }
  const used = new Set();
  const stack = new Stack();
  for (let char of numStr) {
    if (used.has(char)) {
      objCount[char]--;
    } else {
      while (
        stack.size() > 0 &&
        +char > +stack.top() &&
        objCount[stack.top()] > 1
      ) {
        objCount[stack.top()]--;
        used.delete(stack.top());
        stack.pop();
      }
      stack.push(char);
      used.add(char);
    }
  }
  return stack.data.reverse().join('');
}

const inputValue1 = 12341; //2341
const inputValue2 = 412234; //4123
test(maximumAfterDeduplication, inputValue1);
test(maximumAfterDeduplication, inputValue2);
