const arr = new Array(10)
  .fill(0)
  .map((i, idx) => idx)
  .sort(() => Math.random() - 0.5);

let len;
function heapSort(arr) {
  len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    buildMaxHeap(arr, i);
  }
}

function buildMaxHeap(arr, i) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let result = i;

  if (left < len && arr[left] > arr[result]) {
    result = left;
  }

  if (right < len && arr[right] > arr[result]) {
    result = right;
  }

  if (result != i) {
    swap(arr, i, result);
    buildMaxHeap(arr, result);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function sort(arr) {
  console.log("initArr", arr);
  heapSort(arr);
  console.log("firstBuild", arr);
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    buildMaxHeap(arr, 0);
  }
  return arr;
}

console.log(sort(arr));
