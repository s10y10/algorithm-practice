//明明生成了N 个 1 至 500 之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，
//把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。

//数据范围：1 ≤ N ≤ 1000 ，输入的数字大小 val 满足 1 ≤ val ≤ 500

//输入描述
//第一行先输入随机整数的个数 N 。接下来的 N 行每行输入一个整数，代表明明生成的随机数。

//输出描述：
//输出多行，表示输入数据处理后的结果。

const { test } = require('./tools/test');

function mingmingRandom(arr) {
  const set = new Set();
  const nums = [];
  arr.shift();
  arr.forEach((num) => {
    if (!set.has(num)) {
      nums.push(num);
      set.add(num);
    }
  });
  return nums.sort();
}

const inputValue = [3, 2, 2, 1]; //1 2
test(mingmingRandom, inputValue);
