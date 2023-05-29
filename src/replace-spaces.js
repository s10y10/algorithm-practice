// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
// 示例 1：
// 输入：s = "We are happy."
// 输出："We%20are%20happy."

function replaceSpaces(str) {
  const len = str.length;
  let result = "";
  for (let i = 0; i < len; i++) {
    const char = str.charAt(i);
    if (char === " ") {
      result += "%20";
    } else {
      result += char;
    }
  }
  return result;
}

const inputValue = "We are happy.";
console.time("a");
const result = replaceSpaces(inputValue);
console.timeEnd("a");
console.log(result);
