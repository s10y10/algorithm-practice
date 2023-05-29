function BinaryTree(arr) {
  let nodeList = arr.map((item) => new BinaryTreeNode(item));
  this.root = nodeList[0];
  let i = 0;
  // 给存在右节点的节点添加两个节点
  for (; i * 2 + 2 < arr.length; i++) {
    let node = nodeList[i];
    // left:i*2+1  right:i*2+2
    node.setLeft(nodeList[i * 2 + 1]).setRight(nodeList[i * 2 + 2]);
  }
  // 最后一个节点可能为左节点
  if (i * 2 + 1 < arr.length) {
    nodeList[i].setLeft(nodeList[i * 2 + 1]);
  }
}

function BinaryTreeNode(val) {
  this.val = val;
  this.left = undefined;
  this.right = undefined;
}

BinaryTreeNode.prototype.setLeft = function (val) {
  this.left = val;
  return this;
};
BinaryTreeNode.prototype.setRight = function (val) {
  this.right = val;
  return this;
};

module.exports = { BinaryTree };
