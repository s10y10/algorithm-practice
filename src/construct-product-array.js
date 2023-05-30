// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是
// 数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。
// 不能使用除法。
// 示例:
// 输入: [1,2,3,4,5]
// 输出: [120,60,40,30,24]
const { test } = require('./tools/test');
function constructProductArray(arr) {
  const len = arr.length;
  const leftArr = new Array(len);
  const rightArr = new Array(len);
  leftArr[0] = 1;
  rightArr[len - 1] = 1;
  for (let i = 1; i < arr.length; i++) {
    leftArr[i] = arr[i - 1] * leftArr[i - 1];
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    rightArr[i] = arr[i + 1] * rightArr[i + 1];
  }
  const result = [];
  for (let i = 0; i < len; i++) {
    result[i] = leftArr[i] * rightArr[i];
  }
  return result;
}
const inputValue1 = [1, 2, 3, 4, 5];
test(constructProductArray, inputValue1);
