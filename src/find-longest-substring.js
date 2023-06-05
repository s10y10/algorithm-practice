//给定一个字符串 s ，找出这样一个子串：
//该子串中的任意一个字符最多出现 2 次；
//该子串不包含指定某个字符；
//请你找出满足该条件的最长子串的长度。

const { test } = require('./tools/test');

function findLongestSubstring(str, char) {
  let dic = {};
  let left = 0;
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (s === char) {
      dic = {};
      left = i + 1;
    } else {
      if (dic[s] === undefined) {
        dic[s] = 0;
      }
      dic[s]++;
      while (dic[s] > 2) {
        dic[str[left]]--;
        left++;
      }
      result = Math.max(result, i - left + 1);
    }
  }
  return result;
}

const inputValue = 'ABC123DCC';
test(findLongestSubstring, inputValue, 'Z');
