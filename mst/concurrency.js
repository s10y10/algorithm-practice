(() => {
  const urlList = new Array(10)
    .fill("")
    .map((s, idx) => `./imgs/img${idx + 1}.png`);
  const result = new Array(urlList.length).fill(undefined);
  const maxNum = 3;
  let currentCount = 0;

  function run() {
    while (currentCount < maxNum && urlList.length) {
      loadImage(urlList.shift(), 10 - urlList.length - 1);
    }
  }

  function loadImage(url, idx) {
    if (!url) return;
    currentCount++;
    setTimeout(() => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.open("GET", url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const obj = URL.createObjectURL(xhr.response);
          checkResult(idx, obj, url);
        }
      };
      xhr.send();
    }, Math.random() * 1000 + 1000);
  }

  function checkResult(idx, obj, url) {
    result[idx] = { idx, obj, url };
    currentCount--;
    if (result.some((item) => item === undefined)) {
      loadImage(urlList.shift(), 10 - urlList.length - 1);
    } else {
      result.forEach((o) => {
        const img = document.createElement("img");
        img.src = o.obj;
        img.setAttribute("idx", o.url);
        document.body.appendChild(img);
      });
    }
  }
  run();
})();

function _createTask(caller, args, resolve, reject) {
  return () => {
    // 实际上是在这里调用了异步任务，并将异步任务的返回（resolve和reject）抛给了上层
    caller(...args)
      .then(resolve)
      .catch(reject)
      .finally(() => {
        // 任务队列的消费区，利用Promise的finally方法，在异步任务结束后，取出下一个任务执行
        this._count--;
        if (this._taskQueue.length) {
          // console.log('a task run over, pop a task to run')
          let task = this._taskQueue.shift();
          task();
        } else {
          // console.log('task count = ', count)
        }
      });
    this._count++;
    // console.log('task run , task count = ', count)
  };
}
