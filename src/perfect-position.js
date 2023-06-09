//在第一人称射击游戏中，玩家通过键盘的 A、S、D、W 四个按键控制游戏人物分别向左、向后、向右、向前进行移动，从而完成走位。

//假设玩家每按动一次键盘，游戏人物会向某个方向移动一步，如果玩家在操作一定次数的键盘并且各个方向的步数相同时，
//此时游戏人物必定会回到原点，则称此次走位为完美走位。

//现给定玩家的走位（例如：ASDA）,请通过更换其中一段连续走位的方式使得原走位能够变成一个完美走位。
//其中待更换的连续走位可以是相同长度的任何走位。

//请返回待更换的连续走位的最小可能长度。若果原走位本身是一个完美走位，则返回 0。

//输入
//输入为由键盘字母表示的走位s，例如：ASDA

//输出
//输出为待更换的连续走位的最小可能长度

//备注
//走位长度 1 ≤ s.length ≤ 10^5
//s.length 是 4 的倍数
//s 中只含有 A, S, D, W 四种字符

const { test } = require('./tools/test');

function perfectPosition(s) {
  const countDic = { A: 0, S: 0, D: 0, W: 0 };
  for (let char of s) {
    countDic[char]++;
  }
  const ad = Math.abs(countDic['A'] - countDic['D']);
  const sw = Math.abs(countDic['S'] - countDic['W']);

  return (ad + sw) / 2;
}

const inputValue1 = 'ASDW'; //0
const inputValue2 = 'AASW'; //1
test(perfectPosition, inputValue1);
test(perfectPosition, inputValue2);
