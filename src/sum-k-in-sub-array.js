//和为k的子数组
// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：
// 输入：nums = [1,2,3], k = 3
// 输出：2
const { test } = require('./tools/test');
function sumKSubArray(nums, k) {
  let sum = 0;
  let map = new Map();
  let count = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

test(sumKSubArray, [1, 1, 1], 2);
test(sumKSubArray, [1, 2, 3], 3);
test(sumKSubArray, [1, 2, 3, 0, 1], 3);
