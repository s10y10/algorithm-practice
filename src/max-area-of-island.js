// 给定一个包含了一些 0 和 1 的非空二维数组 grid，
// 一个岛屿是一组相邻的 1（代表陆地），这里的「相邻」要求两个 1 必须
// 在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表海洋）包围着。
// 找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

const { test } = require('./tools/test');

function isInArea(area, r, c) {
  return r >= 0 && c >= 0 && r < area.length && c < area[0].length;
}

function dfs(area, r, c) {
  if (!isInArea(area, r, c)) {
    return 0;
  }
  if (area[r][c] != 1) {
    return 0;
  }
  area[r][c] = 2;

  return (
    1 +
    dfs(area, r - 1, c) +
    dfs(area, r + 1, c) +
    dfs(area, r, c - 1) +
    dfs(area, r, c + 1)
  );
}

function maxAreaOfIsland(area) {
  let res = 0;
  for (let i = 0; i < area.length; i++) {
    for (let j = 0; j < area[0].length; j++) {
      if (area[i][j] == 1) {
        res = Math.max(res, dfs(area, i, j));
      }
    }
  }
  return res;
}

const inputValue = [
  [0, 1, 0, 1, 1],
  [1, 1, 1, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 1, 0, 1, 1],
];
test(maxAreaOfIsland, inputValue);
