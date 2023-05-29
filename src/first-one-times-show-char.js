// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例 1:
// 输入：s = "abaccdeff"
// 输出：'b'

// 示例 2:
// 输入：s = ""
// 输出：' '

function firstOneTimesShowChar(str) {
  const arr = str.split("");
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = true;
    } else {
      obj[arr[i]] = false;
    }
  }
  for (let key in obj) {
    if (obj[key] === true) {
      return key;
    }
  }
  return " ";
}

const inputValue1 = "abaccdeff";
const inputValue2 = "";
console.time("a");
const result1 = firstOneTimesShowChar(inputValue1);
const result2 = firstOneTimesShowChar(inputValue2);
console.timeEnd("a");
console.log(result1);
console.log(result2);
