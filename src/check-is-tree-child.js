// 输入两棵二叉树 A 和 B ，判断 B 是不是 A 的子结构。(约定空树不是任意一个树的子结构)
// B 是 A 的子结构， 即 A 中有出现和B相同的结构和节点值
const { test } = require('./tools/test');
const { BinaryTree } = require('./tools/export');
function isChildStructure(tree1, tree2, type) {
  if (!tree2) {
    return true;
  }
  if (!tree1) return false;
  if (tree2.val !== null && tree1.val !== tree2.val) return false;
  return (
    isChildStructure(tree1.left, tree2.left, 2) &&
    isChildStructure(tree1.right, tree2.right, 2)
  );
}
function checkIsTreeChild(tree1, tree2, type) {
  if (!tree1 || !tree2) return false;
  return (
    isChildStructure(tree1, tree2, 1) ||
    checkIsTreeChild(tree1.left, tree2, 2) ||
    checkIsTreeChild(tree1.right, tree2, 2)
  );
}
const inputValue1 = new BinaryTree([3, 4, 5, 1, 2]).root;
const inputValue2 = new BinaryTree([3, 4, null, null, 2]).root;
test(checkIsTreeChild, inputValue1, inputValue2, 1);
