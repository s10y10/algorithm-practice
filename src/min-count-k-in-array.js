// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入 4、5、1、6、2、7、3、8 这 8 个数字，则
// 最小的 4 个数字是 1、2、3、4 。
// 示例 1：
// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
// 示例 2：
// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]
const { test } = require('./tools/test');
function minCountKInArray(arr, k) {
  if (arr.length <= 1) return arr;
  const midIdx = Math.floor(arr.length / 2);
  const midVal = arr.splice(midIdx, 1);
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  if (left.length === k) {
    return left;
  } else if (left.length + 1 === k) {
    return left.concat(midVal);
  } else if (left.length > k) {
    return minCountKInArray(left, k);
  } else {
    return left
      .concat(midVal)
      .concat(minCountKInArray(right, k - left.length - 1));
  }
}
const inputValue1 = [3, 2, 1];
const inputValue2 = [0, 1, 2, 1];
const inputValue3 = [4, 5, 1, 6, 2, 7, 3, 8];
test(minCountKInArray, inputValue1, 2);
test(minCountKInArray, inputValue2, 1);
test(minCountKInArray, inputValue3, 4);
