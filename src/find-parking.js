//停车场有一横排车位，0 代表没有停车，1 代表有车。至少停了一辆车在车位上，也至少有一个空位没有停车。

//为了防剐蹭，需为停车人找到一个车位，使得距停车人的车最近的车辆的距离是最大的，返回此时的最大距离。

//输入描述
//1、一个用半角逗号分割的停车标识字符串，停车标识为 0 或 1，0 为空位，1 为已停车。

//2、停车位最多 100 个。

//输出描述
//输出一个整数记录最大距离。

const { test } = require('./tools/test');

function findParking2(arr) {
  let left, right;
  let res;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      left = i;
      break;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] == 1) {
      right = i;
      break;
    }
  }

  res = Math.max(left, n - right - 1);

  let pre = left;
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] == 1) {
      res = Math.max(res, Math.floor((i - pre) / 2));
      pre = i;
    }
  }

  return Math.floor(res);
}

function findParking(arr) {
  const dpL = [];
  const dpR = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      dpL[i] = 0;
    } else {
      dpL[i] = (dpL[i - 1] || 0) + 1;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 1) {
      dpR[i] = 0;
    } else {
      dpR[i] = (dpR[i + 1] || 0) + 1;
    }
  }

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max((dpL[i] + dpR[i]) / 2, max);
  }
  return Math.floor(max);
}

const inputValue1 = [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1]; //2
const inputValue2 = [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1]; //3
test(findParking, inputValue1);
test(findParking, inputValue2);

test(findParking2, inputValue1);
test(findParking2, inputValue2);
