// 编写一个程序，找到两个单链表相交的起始节点。

const { arrayToList } = require("./tools/export");

function publicNodeBetweenTwoList(list1, list2) {
  let point1 = list1;
  let point2 = list2;

  while (point1 != point2) {
    if (point1) {
      point1 = point1.next;
    } else {
      point1 = list2;
    }

    if (point2) {
      point2 = point2.next;
    } else {
      point2 = list1;
    }
  }
  return point1;
}

const list1 = arrayToList([1, 3, 2, 4, 5]);
const list2 = arrayToList([8, 7, 9, 6]);
list2.next.next.next.next = list1.next.next;
console.time("a");
const result1 = publicNodeBetweenTwoList(list1, list2);
console.timeEnd("a");
console.log(result1);
