// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
// 示例1：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
const { test } = require('./tools/test');
const { arrayToList } = require('./tools/array-to-list');
function mergeTwoOrderList(list1, list2) {
  let newList = {
    val: -1,
    next: null,
  };
  let curNode = newList;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curNode.next = list1;
      list1 = list1.next;
    } else {
      curNode.next = list2;
      list2 = list2.next;
    }
    curNode = curNode.next;
  }
  if (list1) {
    curNode.next = list1;
  }
  if (list2) {
    curNode.next = list2;
  }
  newList = newList.next;
  return newList;
}
const inputValue1 = arrayToList([1, 2, 4]);
const inputValue2 = arrayToList([1, 3, 4]);
test(mergeTwoOrderList, inputValue1, inputValue2);
