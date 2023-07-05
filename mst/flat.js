const arr = [1, 2, 3, [4, 5], [6, [7, [8, 9, [10]]]]];

const flat1 = function (arr) {
  return arr.reduce((pre, current) => {
    return pre.concat(Array.isArray(current) ? [...flat1(current)] : [current]);
  }, []);
};

const flat2 = function (arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};

const flat3 = function (arr) {
  return JSON.parse(`[${JSON.stringify(arr).replace(/[\[\]]/g, "")}]`);
};

console.log(flat1(arr.concat()));
console.log(flat2(arr.concat()));
console.log(flat3(arr.concat()));
