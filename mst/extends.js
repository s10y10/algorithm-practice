//原型链继承

function Parent() {
  this.names = ["sy", "sxc"];
}

function Child() {}
Child.prototype = new Parent();
const child = new Child();
console.log(child.names);

//缺点
//1.属性共享
//2.不能传参
const child2 = new Child();
child2.names.push("syl");
console.log(child.names);

// 构造函数技能
function Parent2() {
  this.names = ["sy", "sxc"];
}
Parent2.prototype.type = "person";
function Child2() {
  Parent2.call(this);
}
//缺点
//1.不能继承原型属性
//2.无法服用,每个都是新实例
const child3 = new Child2();
const child4 = new Child2();
child4.names.push("syl");
console.log(child3.names, child3.type);

//组合继承
function Parent3() {
  this.names = ["sy", "sxc"];
}
Parent3.prototype.getName = function () {
  return this.name;
};
function Child3() {
  Parent.call(this);
}
Child3.prototype = new Parent3();
//缺点
//会调用两次父级构造函数

//原型继承(create) //缺点和原型链继承一样
function create(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

//寄生继承
//调用Object.create,然后增强对象能力
// 缺点会多new 一次
function createObj(o) {
  var clone = Object.create(o); // 重点
  clone.sayName = function () {
    console.log("hi");
  };
  return clone;
}

// 寄生组合继承

function prototype(child, parent) {
  let F = function () {};
  F.prototype = parent.prototype;
  let prototype = new F();
  prototype.constructor = child;
  child.prototype = prototype;
}

function inherit(child, parent) {
  //在new inheritFn 的时候将构造函数指向子类
  function inheritFn() {
    this.constructor = child;
  }
  inheritFn.prototype = parent.prototype;
  //将子类的原型指向父类原型的一个副本
  child.prototype = new inheritFn();
}

function Parent4() {
  this.name = "sy1111";
}
Parent4.prototype.getName = function () {
  return this.name;
};

function Child4() {
  Parent4.call(this);
}
prototype(Child4, Parent4);

// inherit(Child4, Parent4);

const c4 = new Child4();
console.log(c4.name, c4.getName(), "------");
