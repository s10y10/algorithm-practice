let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

function toTree(arr) {
  let root;
  const map = new Map();
  arr.forEach((element) => {
    const { pid } = element;
    let arr = map.get(pid);
    if (!arr) {
      arr = [];
      map.set(pid, arr);
    }
    arr.push(element);
  });

  arr.forEach((element) => {
    const { id, pid } = element;
    if (pid === 0) {
      root = element;
    }
    const children = map.get(id);
    if (children) {
      element.children = children;
    }
  });

  return root;
}

console.log(toTree(arr));
