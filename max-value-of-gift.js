// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。

// 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。

// 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

// 示例 1:
// 输入:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 12
// 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物

function maxValueOfGift(arr) {
  const dp = [];
  arr.forEach((row, idx) => {
    dp[idx] = [];
  });
  let i = 0;
  let j = 0;
  const rowLen = arr.length;
  const ceilLen = arr[0].length;
  while (i < rowLen && j < ceilLen) {
    const tempI = i;
    const tempJ = j;
    while (i < rowLen) {
      dp[i][j] =
        arr[i][j] +
        (i === 0
          ? dp[i][j - 1] || 0
          : Math.max(dp[i - 1][j], dp[i][j - 1] || 0));
      i++;
    }
    i = tempI;
    j++;
    while (j < ceilLen) {
      if (i === 0) {
        dp[i][j] = arr[i][j] + dp[i][j - 1];
      } else {
        dp[i][j] = arr[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      j++;
    }
    j = tempJ;
    i++;
    j++;
  }
  console.log(dp);
  return dp[i - 1][j - 1];
}

const inputValue1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
console.time("a");
const result1 = maxValueOfGift(inputValue1);
console.timeEnd("a");
console.log(result1);
