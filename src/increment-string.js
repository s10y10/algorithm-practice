//定义字符串完全由"A"和"B"组成，当然也可以全是"A"或全是"B"。如果字符串从前往后都是以字典序排列的，
//那么我们称之为严格递增字符串。 给出一个字符串 s，允许修改字符串中的任意字符，
//即可以将任何的"A"修改成"B"，也可以将任何的"B"修改成"A"，求可以使 s 满足严格递增的最小修改次数。存在0 < len(s) < 100000。

//输入描述
//输入一个字符串，表示原始字符串。

//输出描述
//输出一个数字，表示将原始字符串修改为严格递增字符串的最少修改次数。

const { test } = require('./tools/test');

function incrementString(s) {
  let dp = [0, 1];
  if (s[0] === 'B') {
    dp = [1, 0];
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] === 'A') {
      dp[1] = Math.min(...dp) + 1;
    } else {
      dp = [dp[0] + 1, Math.min(...dp)];
    }
  }
  return Math.min(...dp);
}

const inputValue1 = 'BAAAA'; //1
const inputValue2 = 'ABABBA'; //2
test(incrementString, inputValue1);
test(incrementString, inputValue2);
