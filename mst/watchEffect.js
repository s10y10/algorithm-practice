let currentCB = null;
let targetMap = new WeakMap();
const track = function (target, key) {
  let depMap = targetMap.get(target);
  if (!depMap) {
    depMap = new Map();
    targetMap.set(target, depMap);
  }
  let deps = depMap.get(key);
  if (!deps) {
    deps = new Set();
    depMap.set(key, deps);
  }
  if (currentCB) {
    deps.add(currentCB);
  }
};

const trigger = function (target, key) {
  const depMap = targetMap.get(target);
  if (depMap) {
    const deps = depMap.get(key);
    deps.forEach((dep) => {
      dep();
    });
  }
};

const getHandler = function (target, key) {
  console.log("get", key);
  const res = Reflect.get(target, key);
  track(target, key);
  return res;
};

const setHandler = function (target, key, val) {
  console.log("set", key, val);
  const res = Reflect.set(target, key, val);
  trigger(target, key);
  return res;
};

function observer(o) {
  return new Proxy(o, {
    get: getHandler,
    set: setHandler,
  });
}

function watchEffect(fn) {
  currentCB = fn;
  fn();
  currentCB = null;
}

let firstName = observer({ value: "李" });
let lastName = observer({ value: "云龙" });
let fullName = "";

watchEffect(() => {
  fullName = firstName.value + lastName.value;
  console.log(fullName);
});

firstName.value = "赵";
lastName.value = "刚";
