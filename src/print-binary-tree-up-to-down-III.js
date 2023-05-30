// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
// 例如: 给定二叉树: [3,9,20,null,null,15,7]
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：
// [
//   [3],
//   [20,9],
//   [15,7]
// ]
const { test } = require('./tools/test');
const { BinaryTree } = require('./tools/export');
function printBinaryTreeUpToDownII(node) {
  const result = [];
  const queue = [node];
  let isOddFloor = true;
  while (queue.length) {
    const size = queue.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      const item = queue.shift();
      if (item.val) {
        if (isOddFloor) {
          temp.push(item.val);
        } else {
          temp.unshift(item.val);
        }
      }
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
    result.push(temp);
    isOddFloor = !isOddFloor;
  }
  return result;
}
const inputValue1 = new BinaryTree([3, 9, 20, null, null, 15, 7]).root;
test(printBinaryTreeUpToDownII, inputValue1);
