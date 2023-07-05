function myInstanceof(left, right) {
  let proto = left.__proto__;
  while (proto) {
    if (proto === right.prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}

const s = "a";

console.log(myInstanceof(s, Boolean));
