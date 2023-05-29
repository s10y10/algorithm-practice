// 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的
// 一条路径，最长路径的长度为树的深度。

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

const { BinaryTree } = require("./tools/export");

function binaryTreeDeep(node) {
  if (!node) return 0;
  let leftDeep = binaryTreeDeep(node.left);
  let rightDeep = binaryTreeDeep(node.right);
  let deep = Math.max(leftDeep, rightDeep);
  return deep + 1;
}

const inputValue1 = new BinaryTree([3, 9, 20, null, null, 15, 7]);
console.time("a");
const result1 = binaryTreeDeep(inputValue1.root, 3);
console.timeEnd("a");
console.log(result1);
