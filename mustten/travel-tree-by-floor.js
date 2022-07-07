//逐层、锯齿打印

const { BinaryTree } = require("../tools/binaryTree");

function travelTreeByFloor(rootNode) {
  const arr = [];
  const stack = [];
  stack.push(rootNode);
  let isOddFloor = 0;
  while (stack.length) {
    isOddFloor = isOddFloor ^ 1;
    const size = stack.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      const node = stack.shift();
      if (node && node.val) {
        if (isOddFloor) {
          temp.push(node.val);
        } else {
          temp.unshift(node.val);
        }
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    arr.push(temp);
  }
  return arr;
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
console.log(travelTreeByFloor(tree.root));
