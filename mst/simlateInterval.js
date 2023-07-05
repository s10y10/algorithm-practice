function simlateInterval(fn, time) {
  let timer = null;
  let inner = function () {
    fn();
    timer = setTimeout(inner, time);
  };
  timer = setTimeout(inner, time);
  return () => {
    return timer;
  };
}

const id = simlateInterval(() => {
  console.log(1);
}, 1000);

setTimeout(() => {
  clearTimeout(id());
}, 5000);
