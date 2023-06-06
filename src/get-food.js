//主办方设计了一个获取食物的游戏。

//游戏的地图由 N个方格组成，每个方格上至多 2个传送门，通过传送门可将参与者传送至指定的其它方格。同时，每个方格上标注了三个数字：

//第一个数字 id：代表方格的编号，从0到 N - 1，每个方格各不相同；
//第二个数字 parent-id：代表从编号为parent-id的方格可以通过传送门传送到当前方格(-1则表示没有任何方格可以通过传送门传送到此方格，这样的方格在地图中有且仅有一个)；
//第三个数字value：取值在[100，100]的整数值之间，正整数代表参与者得到相应取值单位的食物，负整数代表失去相应数值单位的食物(参与者可能存在临时持有食物为负数的情况)，0则代表无变化。
//此外，地图设计时保证了参与者不可能到达相同的方格两次，并且至少有一个方格的value是正整数。

//游戏开始后，参与者任意选择一个方格作为出发点，当遇到下列情况之一退出游戏：

//参与者当前所处的方格无传送门；
//参与者在任意方格上主动宣布退出游戏。
//请计算参与者退出游戏后，最多可以获得多少单位的食物。

//示例一
//输入
//7
//0 1 8
//1 -1 -2
//2 1 9
//4 0 -2
//5 4 3
//3 0 -3
//6 2 -3
//输出
//9
//说明
//参与者从方格0出发，通过传送门到达方格4，再通过传送门到达方格5。
//一共获得8+(−2)+3=9个单位食物，得到食物最多
//或者参与者在游戏开始时处于方格2，直接主动宣布退出游戏，也可以获得9个单位食物。

//示例二
//输入
//3
//0 -1 3
//1 0 1
//2 0 2
//输出
//5
//说明
//参与者从方格0出发，通过传送门到达方格2，一共可以获得3+2=5个单位食物，此时得到食物最多。

const { test } = require('./tools/test');

function getTree(arr) {
  const tree = {};
  arr.forEach((item) => {
    const node = { id: item[0], pId: item[1], val: item[2] };
    if (!tree[node.pId]) {
      tree[node.pId] = [];
    }
    tree[node.pId].push(node);
  });
  return tree;
}

function dfsTree(tree, node, perVal, maxVal) {
  let tempVal;
  if (perVal < 0) {
    tempVal = node.val;
  } else {
    tempVal = perVal + node.val;
  }
  const newMax = Math.max(tempVal, maxVal);
  if (!tree[node.id]) {
    return newMax;
  } else {
    const nodes = tree[node.id];
    nodes.forEach((node) => {
      maxVal = Math.max(maxVal, dfsTree(tree, node, tempVal, maxVal));
    });
  }
  return maxVal;
}

function getFood(arr) {
  const tree = getTree(arr);
  const result = dfsTree(
    tree,
    tree[-1][0],
    -Number.MAX_VALUE,
    -Number.MAX_VALUE
  );
  return result;
}

//9
const inputValue1 = [
  [0, 1, 8],
  [1, -1, -2],
  [2, 1, 9],
  [4, 0, -2],
  [5, 4, 3],
  [3, 0, -3],
  [6, 2, -3],
];

//5
const inputValue2 = [
  [0, -1, 3],
  [1, 0, 1],
  [2, 0, 2],
];
test(getFood, inputValue1);
test(getFood, inputValue2);
