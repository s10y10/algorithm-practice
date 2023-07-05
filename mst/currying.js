function sum(arr) {
  console.log(arr);
  return arr.reduce((a, b) => a + b);
}

function currying(fn, ...arg1) {
  return function (...arg2) {
    if (arg2.length === 0) {
      return fn([...arg1, ...arg2]);
    } else {
      return currying(fn, ...arg1, ...arg2);
    }
  };
}

const cFn = currying(sum);
console.log(cFn(1, 2, 3)(4)(5, 6)());
