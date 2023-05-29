//给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

const { arrayToList } = require("../tools/array-to-list");

function reverseList(listHead) {
  let preNode;
  while (listHead) {
    const nextNode = listHead.next;
    listHead.next = preNode ? preNode : null;
    preNode = listHead;
    listHead = nextNode;
  }
  return preNode;
}

function reverseList2(listHead) {
  if (!listHead || !listHead.next) {
    return listHead;
  }
  const node = reverseList2(listHead.next);
  listHead.next.next = listHead;
  listHead.next = null;
  return node;
}

const res = reverseList2(arrayToList([1, 2, 3, 4, 5]));
console.log(JSON.stringify(res));
