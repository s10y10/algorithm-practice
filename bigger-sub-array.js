// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。

//如果不存在符合条件的子数组，返回 0 。

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 输入：target = 4, nums = [1,4,4]
// 输出：1

// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

const { test } = require('./tools/test');

function biggerSubArray(nums, target) {
  let left = 0;
  let result = nums.length + 1;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      result = Math.min(result, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return result === nums.length + 1 ? 0 : result;
}

test(biggerSubArray, [2, 3, 1, 2, 4, 3], 7);
test(biggerSubArray, [1, 4, 4], 4);
test(biggerSubArray, [1, 1, 1, 1, 1, 1, 1, 1], 11);
