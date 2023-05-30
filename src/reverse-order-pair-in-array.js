// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 输入一个数组，求出这个数组中的逆序对的总数。
// 示例 1:
// 输入: [7,5,6,4]
// 输出: 5
const { test } = require('./tools/test');
function reverseOrderPairInArray(arr) {
  let count = 0;
  const result = [];
  function mergeSort(arr, start, end, result, type) {
    if (start >= end) return;
    let mid = Math.floor((start + end) / 2);
    let letfStart = start;
    let leftEnd = mid;
    let rightStart = mid + 1;
    let rightEnd = end;
    mergeSort(arr, letfStart, leftEnd, result, 1);
    mergeSort(arr, rightStart, rightEnd, result, 2);
    let i = start;
    while (letfStart <= leftEnd && rightStart <= rightEnd) {
      if (arr[letfStart] < arr[rightStart]) {
        result[i] = arr[letfStart];
        letfStart++;
      } else {
        result[i] = arr[rightStart];
        count += leftEnd - letfStart + 1;
        rightStart++;
      }
      i++;
    }
    while (letfStart <= leftEnd) {
      result[i] = arr[letfStart];
      i++;
      letfStart++;
    }
    while (rightStart <= rightEnd) {
      result[i] = arr[rightStart];
      rightStart++;
      i++;
    }
    for (let j = start; j <= end; j++) {
      arr[j] = result[j];
    }
  }
  mergeSort(arr, 0, arr.length - 1, result);
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] > arr[j]) {
  //         count++;
  //       }
  //     }
  //   }
  return count;
}
const inputValue1 = [8, 4, 5, 7, 1, 3, 6, 2];
test(reverseOrderPairInArray, inputValue1);
