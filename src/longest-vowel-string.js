//定义当一个字符串只有元音字母(a,e,i,o,u,A,E,I,O,U)组成,称为元音字符串，
//现给定一个字符串，请找出其中最长的元音字符串，并返回其长度，如果找不到请返回0。
// 字符串中任意一个连续字符组成的子序列称为该字符串的子串。

//输入
//一个字符串s。字符串长度满足0 < len(s) < 10^5，字符串仅由字符a-z或A-Z组成

//输出描述
//一个整数，表示最长的元音字符子串的长度。

const { test } = require('./tools/test');

function longestVowelString(str) {
  const config = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let res = 0;
  let temp = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (config.has(char)) {
      temp++;
    } else {
      res = Math.max(res, temp);
      temp = 0;
    }
  }
  return res;
}

const inputValue = 'asdbuiodevauufgh'; //3
test(longestVowelString, inputValue);
