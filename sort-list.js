// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
// 输入：head = [4,2,1,3]
// 输出：[1,2,3,4]

// 输入：head = [-1,5,3,4,0]
// 输出：[-1,0,3,4,5]

const { arrayToList } = require("./tools/export");

function sortList(head) {
  let currentNode = head;
  let minVal = undefined;
  let minNode;
  let newHead = undefined;
  while (currentNode) {
    let tempNode = currentNode;
    minVal = undefined;
    while (tempNode) {
      const val = tempNode.val;
      if (minVal === undefined || val < minVal) {
        minVal = val;
        minNode = tempNode;
      }
      tempNode = tempNode.next;
    }
    if (minNode !== currentNode) {
      const minNodeNext = minNode.next;
      const currentNodeNext = currentNode.next;

      let tempNode2 = newHead || currentNode;
      let minNodePre;
      let currentNodePre;

      while (tempNode2) {
        if (tempNode2.next === minNode) {
          minNodePre = tempNode2;
        }
        if (tempNode2.next === currentNode) {
          currentNodePre = tempNode2;
        }
        tempNode2 = tempNode2.next;
      }

      if (minNodePre && minNodePre !== currentNode) {
        minNodePre.next = currentNode;
      }
      if (currentNodePre) {
        currentNodePre.next = minNode;
      }
      minNode.next =
        currentNodeNext === minNode ? currentNode : currentNodeNext;
      currentNode.next = minNodeNext;
    }
    if (newHead === undefined) {
      newHead = minNode;
    }
    currentNode = minNode.next;
  }
  return newHead;
}

const inputValue1 = arrayToList([4, 2, 1, 3]);
const inputValue2 = arrayToList([-1, 5, 3, 4, 0]);
console.time("a");
const result1 = sortList(inputValue1);
const result2 = sortList(inputValue2);
console.timeEnd("a");
console.log(JSON.stringify(result1));
console.log(JSON.stringify(result2));
