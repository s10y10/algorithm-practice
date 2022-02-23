// 一个长度为 n - 1 的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围 0 ～ n - 1 之内。

// 在范围 0 ～ n - 1 内的 n 个数字中有且只有一个数字不在该数组中，请找出这个数字。

// 示例 1:
// 输入: [0,1,3]
// 输出: 2

// 示例 2:
// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

function findLostNumber(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

const inputValue1 = [0, 2, 3];
const inputValue2 = [0, 1, 2, 3, 4, 5, 6, 7, 9];
console.time("a");
const result1 = findLostNumber(inputValue1);
const result2 = findLostNumber(inputValue2);
console.timeEnd("a");
console.log(result1);
console.log(result2);
