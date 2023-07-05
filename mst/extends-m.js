//1.原型链继承
//数据共享,不能传参

function Parent1() {
  this.name = ["a", "b", "c"];
}

function Child1() {}
Child1.prototype = new Parent1();
console.log(new Child1().name);

//2.构造继承
//不能传参
function Parent2(type) {
  this.name = ["a", "b", "c"];
  this.type = type;
}
function Child2() {
  Parent2.call(this, "c");
}
console.log(new Child2().type);

//3.组合继承
//1+2,new两次 不写了

//4.原型继承,就是create
function create(O) {
  const F = function () {};
  F.prototype = O;
  return new F();
}

//5.寄生继承

//6.寄生组合继承
function inherit(P, C) {
  const pObj = create(P.prototype);
  pObj.constructor = C;
  C.prototype = pObj;
}
