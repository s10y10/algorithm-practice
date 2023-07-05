function patch(oldNode, newNode) {
  if (oldNode && !newNode) {
    //销毁旧的节点
    return;
  }
  if (!oldNode) {
    // 子组件首次渲染
  } else {
    if (oldNode.nodeType) {
      //oldNode是真实节点, 首次渲染根组件
    } else {
      patchNode(oldNode, newNode);
    }
  }
}

function patchNode(oldNode, newNode) {
  if (oldNode === newNode) return;
  newNode.elm = oldNode.elm;

  const newChildren = newNode.children;
  const oldChildren = oldNode.children;

  if (!newNode.text) {
    //没有文本节点
    if (newChildren && oldChildren) {
      updateChildren(oldChildren, newChildren);
    } else if (newChildren) {
      //创建新的children赋给elm
    } else {
      //删除旧的children元素
    }
  } else {
    if (newNode.text.expression) {
      const value = JSON.stringify(newNode.context[newNode.text.expression]);
      oldNode.elm.textContent = value;
    }
  }
}

function updateChildren(oldChildren, newChildren) {
  let newStartIdx = 0;
  let oldStartIdx = 0;
  let newEndIdx = newChildren.length - 1;
  let oldEndIdx = oldChildren.length - 1;

  while (newStartIdx <= newEndIdx && oldStartIdx <= oldEndIdx) {
    const newStartNode = newChildren[newStartIdx];
    const oldStartNode = oldChildren[oldStartIdx];
    const newEndNode = newChildren[newEndIdx];
    const oldEndNode = oldChildren[oldEndIdx];

    if (newStartNode === oldStartNode) {
      patchNode(oldStartNode, newStartNode);
      newStartIdx++;
      oldStartIdx++;
    } else if (newStartNode === oldEndNode) {
      patchNode(oldEndNode, newStartNode);
      oldEndNode.elm.parentNode.insertBefore(
        oldEndNode.elm,
        oldChildren[newStartIdx].elm
      );
      newStartIdx++;
      oldEndIdx--;
    } else if (newEndNode == oldStartNode) {
      patchNode(oldStartNode, newEndNode);
      oldStartNode.elm.parentNode.insertBefore(
        oldStartNode.elm,
        oldCh[newEndIdx].elm.nextSibling
      );
      newEndIdx--;
      oldStartIdx--;
    } else if (newEndNode === oldEndNode) {
      patchNode(oldEndNode, newEndNode);
      newEndIdx--;
      oldEndIdx--;
    } else {
      //find
    }

    // 跳出循环，说明有一个节点首先遍历结束了
    if (newStartIdx < newEndIdx) {
      // 说明老节点先遍历结束，则将剩余的新节点添加到 DOM 中
    }
    if (oldStartIdx < oldEndIdx) {
      // 说明新节点先遍历结束，则将剩余的这些老节点从 DOM 中删掉
    }
  }
}

function isSameNode(n1, n2) {
  return n1.tag === n2.tag && n1.key === n2.key;
}
