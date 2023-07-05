function debounce(fn, time, immediate = false) {
  let timeId = -1;
  let isRun = false;
  return function () {
    const context = this;
    const arg = [...arguments];
    if (immediate && !isRun && timeId === -1) {
      isRun = true;
      fn.apply(context, arg);
      timeId = setTimeout(() => {
        isRun = false;
      }, time);
      return;
    }
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      fn.apply(context, arg);
    }, time);
  };
}

function func(a) {
  console.log(111111, a, Date.now() - time);
  time = Date.now();
}

const dFunc = debounce(func, 1000, true);
var time = Date.now();
dFunc("aa");
dFunc("aa");
setTimeout(() => {
  dFunc("aaa");
}, 500);
