// 远征队即将开启未知的冒险之旅，不过在此之前，将对补给车队进行最后的检查。
// supplies[i] 表示编号为 i 的补给马车装载的物资数量。

// 考虑到车队过长容易被野兽偷袭，他们决定将车队的长度变为原来的一半（向下取整），计划
// 为：找出车队中 物资之和最小 两辆 相邻 马车，将它们车辆的物资整合为一辆。若存在多组物资之和
// 相同的马车，则取编号最小的两辆马车进行整合；重复上述操作直到车队长度符合要求。

// 请返回车队长度符合要求后，物资的分布情况。

const { test } = require('./tools/test');

function mergeGoods(supplies) {
  let len = Math.ceil(supplies.length / 2);
  while (len > 0) {
    let minCount = Number.MAX_VALUE;
    let minIdx = 0;
    for (let i = 0; i < supplies.length - 1; i++) {
      const newCount = supplies[i] + supplies[i + 1];
      if (newCount < minCount) {
        minCount = newCount;
        minIdx = i;
      }
    }
    console.log(supplies);
    supplies[minIdx] = minCount;
    supplies.splice(minIdx + 1, 1);
    len--;
  }
  return supplies;
}

const inputValue = [
  1, 8, 20, 16, 2, 17, 6, 18, 21, 9, 5, 7, 3, 4, 12, 11, 19, 15, 10, 14, 13,
];
test(mergeGoods, inputValue);
