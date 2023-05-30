// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 要求时间复杂度为O(n)。
// 示例1:
// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
const { test } = require('./tools/test');
function sumSubArray(arr) {
  const dp = [];
  dp[0] = arr[0];
  let result = dp[0];
  for (let i = 1; i < arr.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = arr[i] + dp[i - 1];
    } else {
      dp[i] = arr[i];
    }
    if (dp[i] > result) {
      result = dp[i];
    }
  }
  return result;
}
const inputValue1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
test(sumSubArray, inputValue1);
