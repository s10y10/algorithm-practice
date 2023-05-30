// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1
const { test } = require('./tools/test');
const { BinaryTree } = require('./tools/export');
function balanceBinaryTree(node) {
  if (!node || !node.val) return 0;
  const left = balanceBinaryTree(node.left);
  const right = balanceBinaryTree(node.right);
  if (left === false || right === false) {
    return false;
  }
  if (Math.abs(left - right) > 1) {
    return false;
  } else {
    return Math.max(left, right) + 1;
  }
}
const inputValue1 = new BinaryTree([
  1,
  2,
  3,
  3,
  3,
  null,
  3,
  4,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  5,
]).root;
test(balanceBinaryTree, inputValue1);
