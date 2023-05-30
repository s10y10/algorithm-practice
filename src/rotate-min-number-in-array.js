// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组
// 的一个旋转，输出旋转数组的最小元素。例如，数组[3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为 1。
// 示例 1：
// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：
// 输入：[2,2,2,0,1]
// 输出：0
const {
  test
} = require("./tools/test");
function findMinValue(arr, start) {
  if (arr.length === 1) return arr[0];
  for (let i = start; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return arr[i + 1];
    }
  }
}
function rorateMinNumberInArray(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let midIndex;
  while (leftIndex < rightIndex) {
    midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] > arr[rightIndex]) {
      leftIndex = midIndex + 1;
    } else if (arr[midIndex] < arr[rightIndex]) {
      rightIndex = midIndex - 1;
    } else {
      return findMinValue(arr, leftIndex);
    }
  }
  return arr[leftIndex];
}
const inputValue1 = [3, 4, 5, 1, 2];
const inputValue2 = [2, 2, 2, 0, 1];
const inputValue3 = [1, 1, 1, 0, 1];
test(rorateMinNumberInArray, inputValue1);
test(rorateMinNumberInArray, inputValue2);
test(rorateMinNumberInArray, inputValue3);