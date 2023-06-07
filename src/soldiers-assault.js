// 在一个 M ∗ N 的街区中，有一个士兵 S 和一个敌人 E， 标识 X 为无法通过的街区，
//标识 B 为可以通过的街区；士兵在一个单位时间内可以从一个街区移动到
//相邻的街区（士兵每次只能水平或者垂直方向移动一个街区）；士兵每次改变方向时，
//需要额外花费1个单位的时间（士兵第一次移动个街区的时候，不用考虑其初始方向，
//即只需要一个单位时间即可到达相邻街区）。计算士兵 S 最少需要多少时间才能到达 E 所在的街区。

//输入
//第一行为两个数字，表示街区的大小，M 行，N 列，存在1 < = M ∗ N < = 1000，且M、N 不同时为 1

//接下来输入 M 行，每行 N 个字母，字母 S 表示士兵所在街区，字母 E 表示敌人所在街区，
//字母 X 表示障碍，字母 B 表示可以经过的街区。有且仅有 1 个 S 和一个 E 。

//输出
//输出士兵 S 到达敌人 E 所在的街区时最少需要的时间；当士兵 S 永远无法到达敌人 E 所在的街区时，输出 -1。

const { test } = require('./tools/test');

function isInArea(arr, i, j) {
  return i >= 0 && j >= 0 && i < arr.length && j < arr[0].length;
}

function dfs(arr, i, j, type) {
  if (!isInArea(arr, i, j)) return 0;
  if (arr[i][j] === 'X') return 0;
  if (arr[i][j] === 'E') return type;
  arr[i][j] = 'X';
  const roads = [
    dfs(arr, i - 1, j, type == 0 ? 1 : 2),
    dfs(arr, i + 1, j, type == 0 ? 1 : 2),
    dfs(arr, i, j - 1, 1),
    dfs(arr, i, j + 1, 1),
  ];
  const filter = roads.filter((r) => r !== 0);
  const minRoad = filter.length ? Math.min(...filter) : 0;
  return minRoad === 0 ? 0 : type + minRoad;
}

function soldiersAssault(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 'S') {
        res = dfs(arr, i, j, 0);
      }
    }
  }
  return res === 0 ? -1 : res;
}

const inputValue = [
  ['S', 'B', 'B', 'B', 'B', 'B'],
  ['B', 'X', 'X', 'X', 'X', 'B'],
  ['B', 'B', 'X', 'B', 'B', 'B'],
  ['X', 'B', 'B', 'X', 'X', 'B'],
  ['B', 'X', 'B', 'B', 'X', 'B'],
  ['B', 'B', 'X', 'B', 'E', 'B'],
]; //13
test(soldiersAssault, inputValue);
