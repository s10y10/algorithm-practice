// 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

// 返回删除后的链表的头节点。

// 示例 1:
// 输入: head = [4,5,1,9], val = 5
// 输出: [4,1,9]
// 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

// 示例 2:
// 输入: head = [4,5,1,9], val = 1
// 输出: [4,5,9]
// 解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.

const { arrayToList } = require("./tools/export");

function deleteListNode(list, val) {
  let head = list;
  let pre;
  while (list) {
    if (list.val === val) {
      if (!pre) {
        head = list.next;
      } else {
        pre.next = list.next;
      }
      return head;
    } else {
      pre = list;
      list = list.next;
    }
  }
  return head;
}

const inputValue1 = arrayToList([4, 5, 1, 9]);
const inputValue2 = arrayToList([4, 5, 1, 9]);
console.time("a");
const result1 = deleteListNode(inputValue1, 5);
const result2 = deleteListNode(inputValue2, 1);
console.timeEnd("a");
console.log(result1);
console.log(result2);
