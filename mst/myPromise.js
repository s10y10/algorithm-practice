const STATE = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new Error("is circle"));
  }
  if (x instanceof MyPromise) {
    if (x.state === STATE.PENDING) {
      x.then((y) => {
        resolvePromise(promise2, y, resolve, reject);
      });
    } else if (x.state === STATE.FULFILLED) {
      resolve(x.result);
    } else {
      reject(x.result);
    }
  } else if (x !== null && (typeof x === "object" || typeof x === "function")) {
    let then;
    try {
      then = x.then;
    } catch (e) {
      return reject(e);
    }
    then = x.then;
    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } catch (r) {
        if (called) return;
        called = true;
        reject(e);
      }
    }
  } else {
    resolve(x);
  }
}

class MyPromise {
  constructor(fun) {
    this.result = null;
    this.fulfilledArr = [];
    this.rejectedArr = [];
    this.state = STATE.PENDING;

    try {
      fun(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {}
  }

  resolve(res) {
    if (this.state === STATE.PENDING) {
      this.state = STATE.FULFILLED;
      this.result = res;
      this.fulfilledArr.forEach((fn) => {
        fn(res);
      });
    }
  }

  reject(err) {
    if (this.state === STATE.PENDING) {
      this.state = STATE.REJECTED;
      this.result = err;
      this.rejectedArr.forEach((fn) => {
        fn(err);
      });
    }
  }

  then(onSuccess, onFail) {
    onSuccess = typeof onSuccess === "function" ? onSuccess : (value) => value;
    onFail =
      typeof onFail === "function"
        ? onFail
        : (e) => {
            throw Error(e);
          };

    var promise2 = new MyPromise((resolve, reject) => {
      if (this.state === STATE.PENDING) {
        this.fulfilledArr.push(() => {
          let x = onSuccess(this.result);
          resolvePromise(promise2, x, resolve, reject);
        });
        this.rejectedArr.push(() => {
          let x = onFail(this.result);
          resolvePromise(promise2, x, resolve, reject);
        });
      } else if (this.state === STATE.FULFILLED) {
        let x = onSuccess(this.result);
        resolvePromise(promise2, x, resolve, reject);
      } else {
        let x = onFail(this.result);
        resolvePromise(promise2, x, resolve, reject);
      }
    });
    return promise2;
  }
}

const p = new MyPromise((resolve, reject) => {
  console.log(4);
  setTimeout(() => {
    console.log(1);
    resolve(3);
  });
});
p.then((res) => {
  console.log(res);
  return 5;
}).then((res) => {
  console.log(res);
});
console.log(2);

//4,2,1,3,5
