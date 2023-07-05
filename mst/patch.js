function patch(node1, node2) {
  const oldKeys = {};
  node1.forEach((node, idx) => {
    oldKeys[node.k] = { v: node.v, idx };
  });
  const newKeys = {};
  node2.forEach((node, idx) => {
    newKeys[node.k] = { v: node.v, idx };
  });

  for (let i = 0; i < node1.length; i++) {
    const { v: oldV, k } = node1[i];
    if (!newKeys[k]) {
      node1.splice(i, 1);
      i--;
    } else {
      const { v: newV, idx: newIdx } = newKeys[k];
      if (newV !== oldV) {
        node1[i].v = newV;
      }
    }
  }
  for (let i = 0; i < node2.length; i++) {
    const { v: newV, k } = node2[i];
    if (!oldKeys[k]) {
      node1.push({ v: newV, k });
    }
  }

  for (let i = 0; i < node1.length; i++) {
    const { k } = node1[i];
    const { idx: newIdx } = newKeys[k];
    const { idx: oldIdx, isMove } = oldKeys[k] || {};
    if (newIdx !== oldIdx && !isMove) {
      if (oldIdx !== undefined) {
        node1.splice(newIdx, 0, ...node1.splice(oldIdx, 1));
        oldKeys[k].isMove = true;
      } else {
        node1.splice(newIdx, 0, ...node1.splice(i, 1));
        oldKeys[k] = { isMove: true };
      }
      i--;
    }
  }
}

const vNode1 = [
  { v: 1, k: 1 },
  { v: 2, k: 2 },
  { v: 5, k: 5 },
  { v: 3, k: 3 },
];
const vNode2 = [
  { v: 1, k: 1 },
  { v: 3, k: 3 },
  { v: 4, k: 4 },
  { v: 7, k: 7 },
  { v: 8, k: 2 },
];

patch(vNode1, vNode2);
console.log(vNode1);
