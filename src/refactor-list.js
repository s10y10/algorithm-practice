// 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，

// 将其重新排列后变为：L0→Ln→L1→Ln-1→L2→Ln-2→…

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 示例1:

// 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

// 示例2：

// 给定链表 1->2->3->4, 重新排列为 1->4->2->3.

const { arrayToList } = require("./tools/export");

function refactorList(head) {
  //思路
  //1.快慢指针找到中点
  //2.从中点断开分为左右两个链表
  //3.右链表反转
  //4.两个链表混插
}

const inputValue1 = arrayToList([1, 2, 3, 4, 5]);
const inputValue2 = arrayToList([1, 2, 3, 4]);
console.time("a");
const result1 = refactorList(inputValue1);
const result2 = refactorList(inputValue2);
console.timeEnd("a");
console.log(JSON.stringify(result1));
console.log(JSON.stringify(result2));
