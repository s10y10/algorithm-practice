function throttle(fn, time) {
  let timeId = null;
  return function () {
    if (timeId) return;
    timeId = setTimeout(() => {
      timeId = null;
    }, time);
    fn();
  };
}

var time = Date.now();
function funcA() {
  console.log(1111, Date.now() - time);
  time = Date.now();
}

const tFunc = throttle(funcA, 1000);
setInterval(() => {
  tFunc();
}, 200);
