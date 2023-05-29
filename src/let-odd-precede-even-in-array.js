// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

// 示例：
// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4]
// 注：[3,1,2,4] 也是正确的答案之一。

function letOddPrecedeEvenInArray(arr) {
  let oddPos = -1;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const isOdd = (value & 1) === 1;
    if (isOdd) {
      oddPos += 1;
      if (oddPos !== i) {
        [arr[i], arr[oddPos]] = [arr[oddPos], arr[i]];
      }
    }
  }
  return arr;
}

const inputValue = [1, 2, 3, 4];
console.time("a");
const result = letOddPrecedeEvenInArray(inputValue);
console.timeEnd("a");
console.log(result);
