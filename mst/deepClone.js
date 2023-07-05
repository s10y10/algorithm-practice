function deepClone(obj, map = new WeakMap()) {
  if (typeof obj !== "object") return obj;
  if (map.has(obj)) {
    return map.get(obj);
  }
  let res = Array.isArray(obj) ? [] : {};
  map.set(obj, res);
  for (const key in obj) {
    const temp = obj[key];
    if (temp instanceof Set) {
      res[key] = new Set(deepClone(Array.from(temp)));
    } else if (temp instanceof RegExp) {
      res[key] = new RegExp(temp);
    } else if (temp instanceof Date) {
      res[key] = new Date(temp);
    } else if (typeof temp === "object") {
      res[key] = deepClone(temp, map);
    } else {
      res[key] = obj[key];
    }
  }
  return res;
}

const temp = { x: 9 };

const a = {
  b: 1,
  c: [2, 3, 4],
  d: {
    e: 1,
    f: [5, 6, 7, { z: 8 }, [9]],
  },
  g: /a/,
  h: new Set([8, temp]),
  i: Symbol("s"),
  j: new Date(Date.now()),
  k: function () {
    return this.d;
  },
};

const copyA = deepClone(a);
console.log(copyA.k());
