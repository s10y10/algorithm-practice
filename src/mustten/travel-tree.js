//二叉树中、后序遍历

const { BinaryTree } = require("../tools/BinaryTree");

function centerTravelTree(node) {
  if (!node) return;
  centerTravelTree(node.left);
  console.log(node.val);
  centerTravelTree(node.right);
}

function centerTravelTreeStack(node) {
  const stack = [];
  const result = [];
  while (stack.length || node) {
    while (node.left) {
      stack.push(node);
      node = node.left;
    }
    if (node) {
      result.push(node.val);
    }
    node = stack.pop();
    if (node) {
      result.push(node.val);
      node = node.right;
    }
  }
  console.log(result);
}

function afterTravelTree(node) {
  if (!node) return;
  afterTravelTree(node.left);
  afterTravelTree(node.right);
  console.log(node.val);
}

function afterTravelTreeStack(node) {
  const result = [];
  const stack = [];
  while (stack.length || node) {
    while (node && node.left) {
      stack.push(node);
      node = node.left;
    }
    if (node) {
      result.push(node.val);
    }
    node = stack.pop();
    if (node) {
      if (!node.right) {
        result.push(node.val);
        node = null;
      } else {
        stack.push(node);
        const right = node.right;
        node.right = null;
        node = right;
      }
    }
  }
  console.log(result);
}

const tree = new BinaryTree([
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  null,
  "G",
  "H",
  null,
  null,
  null,
  "I",
]);
// console.log(centerTravelTree(tree.root));
// console.log("---------------------");
// console.log(centerTravelTreeStack(tree.root));
// console.log("---------------------");
console.log(afterTravelTree(tree.root));
console.log("---------------------");
console.log(afterTravelTreeStack(tree.root));
