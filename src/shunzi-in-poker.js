// 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这 5 张牌是不是连续的。

// 2 ～ 10 为数字本身，A 为 1 ，J 为 11 ，Q 为 12 ，K 为 13 ，而大、小王为 0 ，可以看成任意数字。

// A 不能视为 14。

// 示例 1:
// 输入: [1,2,3,4,5]
// 输出: True

// 示例 2:
// 输入: [0,0,1,2,5]
// 输出: True

function shunziInPoker(arr) {
  const set = new Set();
  let min = 14;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const iVal = arr[i];
    if (iVal === 0) continue;
    if (set.has(iVal)) {
      return false;
    }
    set.add(iVal);
    if (iVal > max) {
      max = iVal;
    }
    if (iVal < min) {
      min = iVal;
    }
  }
  return max - min < 5;
}

const inputValue1 = [1, 2, 3, 4, 5];
const inputValue2 = [0, 0, 1, 2, 5];
console.time("a");
const result1 = shunziInPoker(inputValue1);
const result2 = shunziInPoker(inputValue2);
console.timeEnd("a");
console.log(result1);
console.log(result2);
