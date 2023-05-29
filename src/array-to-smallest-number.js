// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

// 示例 1:
// 输入: [10,2]
// 输出: "102"

// 示例 2:
// 输入: [3,30,34,5,9]
// 输出: "3033459"

function arrayToSmallestNumber(arr) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const pointer = arr.shift();
  for (let i = 0; i < arr.length; i++) {
    const number1 = parseInt(`${arr[i]}${pointer}`);
    const number2 = parseInt(`${pointer}${arr[i]}`);
    if (number1 < number2) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return arrayToSmallestNumber(left)
    .concat([pointer])
    .concat(arrayToSmallestNumber(right));
}

const inputValue1 = [10, 2];
const inputValue2 = [3, 30, 34, 5, 9];
console.time('a');
const result1 = arrayToSmallestNumber(inputValue1).join('');
const result2 = arrayToSmallestNumber(inputValue2).join('');
console.timeEnd('a');
console.log(result1);
console.log(result2);
