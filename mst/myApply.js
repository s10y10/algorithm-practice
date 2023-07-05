const obj = {
  name: "obj111",
};

function F() {
  this.name = "aaa";
  this.getName = function (x, y, z) {
    return `${this.name}${x}${y}${z}`;
  };
}

Function.prototype.MyApply = function (context, arg = []) {
  if (typeof this !== "function") return TypeError();
  context = context || window;
  context.fn = this;
  const res = context.fn(...arg);
  delete context.fn;
  return res;
};

const f = new F();
console.log(f.getName.MyApply(f, [0, 0, 0]));
