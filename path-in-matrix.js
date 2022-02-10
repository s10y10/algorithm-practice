// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一格
// 开始，每一步可以在矩阵中向左、右、上、下移动一格。

// 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。例如，在下面的3×4的矩阵中包含一条字符
// 串“bfce”的路径（路径中的字母用加粗标出）。

// [["a","b","c","e"],
//  ["s","f","c","s"],
//  ["a","d","e","e"]]

// 但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。

// 示例 1：
// 输入：board = [["A","B","C","E"],
//               ["S","F","C","S"],
//               ["A","D","E","E"]], word = "ABCCED"
// 输出：true

// 示例 2：
// 输入：board = [["a","b"],
//               ["c","d"]], word = "abcd"
// 输出：false

function checkPath(board, wordArr, w, i, j) {
  if (w > wordArr.length - 1) return true;
  if (!board[i] || !board[i][j]) return false;
  if (board[i][j] === wordArr[w]) {
    console.log(board[i][j], wordArr[w], i, j, w);
    board[i][j] = "*";
    const up = checkPath(board, wordArr, w + 1, i - 1, j);
    const left = checkPath(board, wordArr, w + 1, i, j - 1);
    const down = checkPath(board, wordArr, w + 1, i + 1, j);
    const right = checkPath(board, wordArr, w + 1, i, j + 1);
    const result = up || left || down || right;
    board[i][j] = wordArr[w];
    return result;
  } else {
    return false;
  }
}

function pathInMatrix({ board, word }) {
  const wordArr = word.split("");
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (checkPath(board, wordArr, 0, i, j)) return true;
    }
  }
  return false;
}

const inputValue1 = {
  board: [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word: "ABCCED",
};
const inputValue2 = {
  board: [
    ["a", "b"],
    ["c", "d"],
  ],
  word: "abcd",
};
console.time("a");
const result1 = pathInMatrix(inputValue1);
// const result2 = pathInMatrix(inputValue2);
console.timeEnd("a");
console.log(result1);
// console.log(result2);
