// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
// 例如: 给定二叉树: [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
const { test } = require('./tools/test');
const { BinaryTree } = require('./tools/export');
function printBinaryTreeUpToDownII(node) {
  const result = [];
  const queue = [node];
  while (queue.length) {
    const size = queue.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      const item = queue.shift();
      if (item.val) {
        temp.push(item.val);
      }
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
    result.push(temp);
  }
  return result;
}
const inputValue1 = new BinaryTree([3, 9, 20, null, null, 15, 7]).root;
test(printBinaryTreeUpToDownII, inputValue1);
