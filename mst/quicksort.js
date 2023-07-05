const arr = new Array(10)
  .fill(1)
  .map((i, idx) => idx)
  .sort(() => Math.random() - 0.5);

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const midIdx = Math.floor(arr.length / 2);
  const mid = arr.splice(midIdx, 1)[0];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat([mid]).concat(quickSort(rightArr));
}

function quickSort2(arr) {
  const sort = function (arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    let i = left;
    let j = right;
    const baseValue = arr[j];
    while (i < j) {
      while (i < j && arr[i] <= baseValue) {
        i++;
      }
      arr[j] = arr[i];
      console.log("11111111", arr, i, j);
      while (i < j && arr[j] >= baseValue) {
        j--;
      }
      arr[i] = arr[j];
      console.log("222222222", arr, i, j);
    }
    arr[j] = baseValue;
    console.log("33333333333333", arr, i, j);
    sort(arr, left, j - 1);
    sort(arr, j + 1, right);
  };
  sort(arr);
  return arr;
}

//加深记忆
function quickSort2m(arr) {
  function sort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    let i = left;
    let j = right;
    let baseValue = arr[j];
    while (i < j) {
      while (i < j && baseValue >= arr[i]) {
        i++;
      }
      arr[j] = arr[i];
      while (i < j && baseValue <= arr[j]) {
        j--;
      }
      arr[i] = arr[j];
    }
    arr[j] = baseValue;
    sort(arr, left, j - 1);
    sort(arr, j + 1, right);
  }
  sort(arr);
  return arr;
}

const result = quickSort2m(arr.concat());
console.log(result);
