// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个
// 函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// 示例:
// 现有矩阵 matrix 如下：
// [
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
//   ]
//   给定 target = 5，返回 true。
//   给定 target = 20，返回 false。

function findNumberInTwoDimensionalArray(arr, target) {
  let i = arr.length - 1;
  let j = 0;
  while (arr[i] && arr[i][j]) {
    if (arr[i][j] > target) {
      i--;
    } else if (arr[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
}

const inputValue = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
console.time("a");
const result5 = findNumberInTwoDimensionalArray(inputValue, 5);
const result20 = findNumberInTwoDimensionalArray(inputValue, 20);
console.timeEnd("a");
console.log(result5);
console.log(result20);
