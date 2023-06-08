//集五福作为近年来大家喜闻乐见迎新春活动，集合爱国福、富强福、和谐福、友善福、敬业福
//即可分享超大红包。以 0 和 1 组成的长度为 5 的字符串代表每个人所得到的福卡，
//每一位代表一种福卡，1 表示已经获得该福卡，
//单类型福卡不超过 1 张，随机抽取一个小于 10 人团队，求该团队最多可以集齐多少套五福？

//输入描述
//输入若干个由0、1组成的长度等于5的字符串，代表团队中每个人福卡获得情况
//注意1：1人也可以是一个团队 注意2：1人可以有0到5张福卡，但福卡不能重复

//输出描述
//输出该团队最多能凑齐多少套五福

const { test } = require('./tools/test');

function fiveBlessings(arr) {
  const res = [0, 0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    const s = arr[i];
    for (let idx in s) {
      if (s[idx] == 1) {
        res[idx]++;
      }
    }
  }
  return Math.min(...res);
}

const inputValue1 = ['11001', '11101'];
const inputValue2 = ['11101', '10111'];
test(fiveBlessings, inputValue1);
test(fiveBlessings, inputValue2);
