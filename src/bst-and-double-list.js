// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。
// 为了让您更好地理解问题，以下面的二叉搜索树为例：
//             4
//     2               5
// 1       3
// 我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。
// 对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。
// 特别地，我们希望可以就地完成转换操作。
// 当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。
// 还需要返回链表中的第一个节点的指针。
const { test } = require('./tools/test');
const { BinaryTree } = require('./tools/export');
let preNode;
let headNode;
function LDRTree(node) {
  if (!node) return;
  LDRTree(node.left);
  if (preNode) {
    preNode.right = node;
  } else {
    headNode = node;
  }
  node.left = preNode;
  preNode = node;
  LDRTree(node.right);
}
function bstAndDoubleList(node) {
  LDRTree(node);
  headNode.left = preNode;
  preNode.right = headNode;
  return headNode;
}
const inputValue1 = new BinaryTree([4, 2, 5, 1, 3]).root;
test(bstAndDoubleList, inputValue1);
