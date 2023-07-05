const obj = {
  name: "obj111",
};

function F() {
  this.name = "aaa";
  this.getName = function (x, y, z) {
    return { a: `${this.name}${x}${y}${z}` };
  };
}

Function.prototype.MyBind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let _this = this;
  let arg = [...arguments].slice(1);
  return function F() {
    // 处理函数使用new的情况
    if (this instanceof F) {
      return new _this(...arg, ...arguments);
    } else {
      return _this.apply(context, arg.concat(...arguments));
    }
  };
};

const f = new F();
const a = f.getName.MyBind(f, 0);
console.log(new a(0, 0));
