// 统计一个数字在排序数组中出现的次数。

// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2

// 示例 2:
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0

function findNumberInOrderArray({ nums, target }) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  let midVal;
  let hasTarget = false;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    midVal = nums[mid];
    if (midVal > target) {
      right = mid - 1;
    } else if (midVal < target) {
      left = mid + 1;
    } else {
      hasTarget = true;
      break;
    }
  }
  if (hasTarget) {
    let count = 1;
    for (let i = mid - 1; i >= 0; i--) {
      if (nums[i] === target) {
        count++;
      } else {
        break;
      }
    }
    for (let i = mid + 1; i < nums.length; i++) {
      if (nums[i] === target) {
        count++;
      } else {
        break;
      }
    }
    return count;
  } else {
    return 0;
  }
}

const inputValue1 = { nums: [5, 7, 7, 8, 8, 10], target: 8 };
const inputValue2 = { nums: [5, 7, 7, 8, 8, 10], target: 6 };
console.time("a");
const result1 = findNumberInOrderArray(inputValue1);
const result2 = findNumberInOrderArray(inputValue2);
console.timeEnd("a");
console.log(result1);
console.log(result2);
