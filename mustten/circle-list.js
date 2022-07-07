//判断链表是否有环

const { arrayToList } = require("../tools/array-to-list");

function checkHasCircle(list) {
  let fastP = list;
  let slowP = list;
  while (fastP && fastP.next) {
    fastP = fastP.next.next;
    slowP = slowP.next;
    if (fastP === slowP) {
      return true;
    }
  }
  return false;
}

const inputList = arrayToList([1, 2, 3, 4, 5, 6, 7]);
inputList.next.next.next.next.next.next = inputList.next.next;
console.log(checkHasCircle(inputList));
