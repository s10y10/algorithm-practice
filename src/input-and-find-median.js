// 如何得到一个数据流中的中位数？

// 如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。

// 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

// 例如，

// [2,3,4] 的中位数是 3

// [2,3] 的中位数是 (2 + 3) / 2 = 2.5

// 设计一个支持以下两种操作的数据结构：

// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
// 示例 1：
// 输入：["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
// [[],[1],[2],[],[3],[]]
// 输出：[null,null,null,1.50000,null,2.00000]

// 示例 2：
// 输入：
// ["MedianFinder","addNum","findMedian","addNum","findMedian"]
// [[],[2],[],[3],[]]
// 输出：[null,null,2.00000,null,2.50000]

function MedianFinder() {
  this.data = [];
  this.addNum = function (val) {
    let insert = false;
    for (let i = 0; i < this.data.length; i++) {
      if (val < this.data[i]) {
        insert = true;
        this.data.splice(i, 0, val);
        break;
      }
    }
    if (!insert) {
      this.data.push(val);
    }
    return null;
  };
  this.findMedian = function () {
    const midIdx = Math.floor(this.data.length / 2);
    if ((this.data.length & 1) === 1) {
      //奇数
      return this.data[midIdx].toFixed(5);
    } else {
      return ((this.data[midIdx] + this.data[midIdx - 1]) / 2).toFixed(5);
    }
  };
}

function inputAndFindMedian({ actions, values }) {
  const result = [];
  let medianFinder;
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    switch (action) {
      case "MedianFinder":
        medianFinder = new MedianFinder();
        result.push(null);
        break;
      case "addNum":
        result.push(medianFinder.addNum(values[i][0]));
        break;
      case "findMedian":
        result.push(medianFinder.findMedian());
        break;
    }
  }
  return result;
}

const inputValue1 = {
  actions: [
    "MedianFinder",
    "addNum",
    "addNum",
    "findMedian",
    "addNum",
    "findMedian",
  ],
  values: [[], [1], [2], [], [3], []],
};
const inputValue2 = {
  actions: ["MedianFinder", "addNum", "findMedian", "addNum", "findMedian"],
  values: [[], [2], [], [3], []],
};
console.time("a");
const result1 = inputAndFindMedian(inputValue1);
const result2 = inputAndFindMedian(inputValue2);
console.timeEnd("a");
console.log(result1);
console.log(result2);
