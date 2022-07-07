// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
// (若队列中没有元素，deleteHead 操作返回 -1 )

const { Stack } = require("../tools/stack");

class CQue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  appendTail(val) {
    this.stack1.push(val);
  }

  deleteHead() {
    if (!this.stack2.size()) {
      while (this.stack1.size()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop() || -1;
  }
}
