// 有效的字母异位词
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false
const { test } = require('./tools/test');
function staticsChar(map, char, dir) {
  const newCount = (map.get(char) || 0) + dir;
  if (newCount === 0) {
    map.delete(char);
  } else {
    map.set(char, newCount);
  }
}
function words([s, t]) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const charS = s.charAt(i);
    const charT = t.charAt(i);
    staticsChar(map, charS, 1);
    staticsChar(map, charT, -1);
  }
  return map.size === 0;
}
const inputValue1 = ['anagram', 'nagaram'];
const inputValue2 = ['rat', 'car'];
test(words, inputValue1);
test(words, inputValue2);
