function promisefy(originFn) {
  function fn(...args) {
    return new Promise((resolve, reject) => {
      args.push((err, ...res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      });
      originFn.apply(this, args);
    });
  }
  return fn;
}

function sleep(cb) {
  setTimeout(() => {
    cb(null, 1);
  }, 1000);
}

sleep((t) => {
  console.log(t, "sleep");
});

const sleepP = promisefy(sleep);
(async () => {
  const t = await sleepP();
  console.log(t, "sleepP");
})();
