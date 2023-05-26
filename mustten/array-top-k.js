//寻找数组第K大元素

function arrayTopk(arr, k) {
  const topK = quickSort(arr, 0, arr.length - 1, k);
  console.log(topK);
}

function quickSort(arr, start, end, k) {
  console.log({ arr, start, end, k });
  if (start > end) return;
  let left = start;
  let right = end;
  let val = arr[start];
  while (left < right) {
    while (val <= arr[right] && left < right) {
      right--;
    }
    arr[left] = arr[right];
    while (val >= arr[left] && left < right) {
      left++;
    }
    arr[right] = arr[left];
  }
  arr[left] = val;

  const m = arr.length - left;
  if (m === k) {
    return arr[left];
  }
  if (m < k) {
    return quickSort(arr, start, left - 1, k);
  } else {
    return quickSort(arr, left + 1, end, k);
  }
}

console.log(arrayTopk([4, 5, 2, 1, 3, 8, 9, 7, 6], 4));
