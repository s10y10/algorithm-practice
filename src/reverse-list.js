// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
const {
  test
} = require("./tools/test");
const {
  arrayToList
} = require("./tools/export");
function reverseList(list) {
  let currentNode = list;
  let nextNode = list.next;
  currentNode.next = null;
  while (nextNode) {
    const tempNext = nextNode.next;
    nextNode.next = currentNode;
    currentNode = nextNode;
    nextNode = tempNext;
  }
  return currentNode;
}
const inputValue = arrayToList([1, 2, 3, 4, 5]);
test(reverseList, inputValue);