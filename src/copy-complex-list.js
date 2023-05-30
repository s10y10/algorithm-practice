// 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针
// 指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
// 示例 1：
// 复杂链表的复制
// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
const {
  test
} = require("./tools/test");
const {
  arrayToList
} = require("./tools/export");
function copyComplexList(list) {
  const map = new Map();
  let cur = list;
  let index = 0;
  while (cur) {
    const tempVal = cur.val;
    cur.val = tempVal[0];
    cur.random = tempVal[1];
    map.set(cur, {
      val: cur.val
    });
    cur = cur.next;
    index++;
  }
  cur = list;
  while (cur) {
    const newNode = map.get(cur);
    const nextNode = map.get(cur.next) || null;
    newNode.next = nextNode;
    newNode.random = cur.random;
    cur = cur.next;
  }
  return map.get(list);
}
const inputValue1 = arrayToList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
test(copyComplexList, inputValue1);