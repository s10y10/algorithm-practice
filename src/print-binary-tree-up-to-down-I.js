// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
// 例如: 给定二叉树: [3,9,20,null,null,15,7],
//   3
//    / \
//   9  20
//     /  \
//    15   7
// 返回：
// [3,9,20,15,7]
const { test } = require('./tools/test');
const { BinaryTree } = require('./tools/export');
function printBinaryTreeUpToDownI(node) {
  if (!node) return result;
  if (node.val) {
    result.push(node.val);
  }
  result.push(
    ...printBinaryTreeUpToDownI(node.left),
    ...printBinaryTreeUpToDownI(node.right)
  );
  return result;
}
function printUseDataStruckture(root) {
  const result = [];
  const queue = [root];
  while (queue.length) {
    const item = queue.shift();
    if (item.val) {
      result.push(item.val);
    }
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
  }
  return result;
}
const inputValue1 = new BinaryTree([3, 9, 20, null, null, 15, 7]).root;
test(printUseDataStruckture, inputValue1);
