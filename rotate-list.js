// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

// 示例 1：

// 输入：head = [1,2,3,4,5], k = 2
// 输出：[4,5,1,2,3]
// 示例 2：

// 输入：head = [0,1,2], k = 4
// 输出：[2,0,1]

const { arrayToList } = require("./tools/export");

function rotateList(head, k) {
  let list = head;
  let len = 0;
  while (list) {
    len++;
    list = list.next;
  }
  k = k % len;
  const targetIndex = len - k;
  let idx = 0;
  let newHead;
  list = head;
  while (list) {
    idx++;
    if (idx === targetIndex) {
      newHead = list.next;
      let temp = newHead;
      list.next = null;
      while (temp) {
        if (temp.next == null) {
          temp.next = head;
          break;
        } else {
          temp = temp.next;
        }
      }
      break;
    } else {
      list = list.next;
    }
  }
  return newHead;
}

const inputValue1 = arrayToList([1, 2, 3, 4, 5]);
const inputValue2 = arrayToList([0, 1, 2]);
console.time("a");
const result1 = rotateList(inputValue1, 2);
const result2 = rotateList(inputValue2, 4);
console.timeEnd("a");
console.log(JSON.stringify(result1));
console.log(JSON.stringify(result2));
