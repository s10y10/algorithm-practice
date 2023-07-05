function add() {
  const arg1 = [...arguments];
  const numbers = [];
  numbers.push(...arg1);
  const _add = function () {
    const arg2 = [...arguments];
    numbers.push(...arg2);
    return _add;
  };
  _add.sum = function () {
    return numbers.reduce((a, b) => a + b);
  };
  return _add;
}

console.log(add(1)(2)(3, 4).sum());
