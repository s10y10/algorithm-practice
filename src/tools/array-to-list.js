function arrayToList(arr, round) {
  if (arr.length === 0) return null;
  // 生成链表的根节点
  let root = { val: arr[0], next: null };
  // 记录上一个节点
  let pre = root;
  for (let i = 1; i < arr.length; i++) {
    let node = { val: arr[i], next: null };
    // 创建连接关系 将前一个结点的NEXT设置为当前节点
    pre.next = node;
    // 更新pre为当前节点 下一个要处理的节点
    pre = node;
  }
  //如果round为true，则为循环链表
  if (round) {
    pre.next = root;
  }
  return root;
}

module.exports = { arrayToList };
