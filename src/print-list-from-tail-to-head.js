// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
// 示例 1：
// 输入：head = [1,3,2]
// 输出：[2,3,1]
const { test } = require('./tools/test');
const { arrayToList, Stack } = require('./tools/export');
function printListFromTailToHead(list) {
  const result = [];
  const stack = new Stack();
  while (list) {
    stack.push(list.val);
    list = list.next;
  }
  const size = stack.size();
  for (let i = 0; i < size; i++) {
    result.push(stack.pop());
  }
  return result;
}
const inputValue = arrayToList([1, 3, 2]);
test(printListFromTailToHead, inputValue);
