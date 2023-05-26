//给定一个三角形 triangle ，找出自顶向下的最小路径和。

//每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

//输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]

//输出：11

function minimumPathSum(arr) {
  const dp = [];
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = arr[i][j] + (i == len - 1 ? 0 : Math.min(dp[j], dp[j + 1]));
    }
  }
  return dp[0];
}

const inputValue = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.time('a');
const result = minimumPathSum(inputValue);
console.timeEnd('a');
console.log(result);
