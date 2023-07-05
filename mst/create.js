function myCreate(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function A() {
  this.type = 2;
}
A.prototype.name = "aaa";
const a = new A();

console.log(Object.create(a).type);
console.log(myCreate(a).type);
