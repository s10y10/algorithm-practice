// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入
// 整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

// 示例 1：
// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]

// 示例 2：
// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]

const { Stack } = require("./tools/export");

//双栈模拟队列结构
function Queue() {
  this.CQueue = function () {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    return null;
  };
  this.deleteHead = function () {
    if (this.stack2.size()) {
      return this.stack2.pop();
    } else if (this.stack1.size()) {
      const size = this.stack1.size();
      for (let i = 0; i < size; i++) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    } else {
      return -1;
    }
  };
  this.appendTail = function (value) {
    this.stack1.push(value);
    return null;
  };
}

//逐条执行命令
function realizeListUseStack({ command, list }) {
  const queue = new Queue();
  const result = [];
  for (let i = 0; i < command.length; i++) {
    result.push(queue[command[i]](list[i][0]));
  }
  return result;
}

const inputValue1 = {
  command: ["CQueue", "appendTail", "deleteHead", "deleteHead"],
  list: [[], [3], [], []],
};
const inputValue2 = {
  command: [
    "CQueue",
    "deleteHead",
    "appendTail",
    "appendTail",
    "deleteHead",
    "deleteHead",
  ],
  list: [[], [], [5], [2], [], []],
};
console.time("a");
const result1 = realizeListUseStack(inputValue1);
const result2 = realizeListUseStack(inputValue2);
console.timeEnd("a");
console.log(result1);
console.log(result2);
