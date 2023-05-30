// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// 示例 1:
// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2
const { test } = require('./tools/test');
function moreHalfNumberInArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (result.length === 0) {
      result.unshift(current);
    } else {
      if (result[0] !== current) {
        result.shift();
      } else {
        result.unshift(current);
      }
    }
  }
  return result;
}
const inputValue1 = [1, 2, 3, 2, 2, 2, 5, 4, 2];
test(moreHalfNumberInArray, inputValue1);
