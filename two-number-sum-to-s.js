// 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[2,7] 或者 [7,2]
// 示例 2：

// 输入：nums = [10,26,30,31,47,60], target = 40
// 输出：[10,30] 或者 [30,10]

function twoNumberSumToS({ nums, target }) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  let leftVal = nums[left];
  let rightVal = nums[right];
  let sum = leftVal + rightVal;
  while (sum != target && left < right) {
    if (sum > target) {
      right--;
      rightVal = nums[right];
    } else {
      left++;
      leftVal = nums[left];
    }
    sum = leftVal + rightVal;
  }
  return [leftVal, rightVal];
}

const inputValue1 = {
  nums: [2, 7, 11, 15],
  target: 9,
};
const inputValue2 = {
  nums: [10, 26, 30, 31, 47, 60],
  target: 40,
};
console.time("a");
const result1 = twoNumberSumToS(inputValue1);
const result2 = twoNumberSumToS(inputValue2);
console.timeEnd("a");
console.log(result1);
console.log(result2);
