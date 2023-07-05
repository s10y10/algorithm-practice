function myNew(O, ...arg) {
  const F = {};
  F.__proto__ = O.prototype;
  const res = O.apply(F, arg);
  return typeof res === "object" ? res : F;
}

function Animal(name, type) {
  this.name = name;
  this.type = type;
}

const ani1 = myNew(Animal, "小雨子", "狗");
const ani2 = new Animal("小雨子", "狗");

console.log(ani1, ani2);

function create(F) {
  const ff = function () {};
  ff.prototype = F;
  return new ff();
}
