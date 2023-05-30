// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是
// 则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
// 参考以下这颗二叉搜索树：
//      5
//     / \
//    2   6
//   / \
//  1   3
// 示例 1：
// 输入: [1,6,3,2,5]
// 输出: false
// 示例 2：
// 输入: [1,3,2,6,5]
// 输出: true
const {
  test
} = require("./tools/test");
function checkIsSearchTree(arr, start, end) {
  if (start >= end) return true;
  const root = arr[end];
  let rightIndex = start;
  while (arr[rightIndex] < root) {
    rightIndex++;
  }
  let tempRightIndex = rightIndex;
  while (tempRightIndex < end) {
    tempRightIndex++;
    if (arr[tempRightIndex] < root) {
      return false;
    }
  }
  return checkIsSearchTree(arr, start, rightIndex - 1) && checkIsSearchTree(arr, rightIndex, end - 1);
}
function checkLRDArrayIsBinarySearchTree(arr) {
  return checkIsSearchTree(arr, 0, arr.length - 1);
}
const inputValue1 = [1, 6, 3, 2, 5];
const inputValue2 = [1, 3, 2, 6, 5];
test(checkLRDArrayIsBinarySearchTree, inputValue1);
test(checkLRDArrayIsBinarySearchTree, inputValue2);