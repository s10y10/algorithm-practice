//给定一棵二叉搜索树，请找出其中第 k 大的节点
//           5
//      3         6
//   2     4
// 1
// k=3

const { BinaryTree } = require("./tools/export");

function kBiggerNodeInBST(node, k) {
  let result;
  function printNode(node) {
    if (!node) return;
    printNode(node.right);
    if (node.val) {
      k--;
      if (k === 0) {
        result = node;
        return;
      }
    }
    printNode(node.left);
  }
  printNode(node);
  return result;
}

const inputValue1 = new BinaryTree([5, 3, 6, 2, 4, null, null, 1]);
console.time("a");
const result1 = kBiggerNodeInBST(inputValue1.root, 3);
console.timeEnd("a");
console.log(result1);
