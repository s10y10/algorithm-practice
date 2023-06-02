//探险家小扣的行动轨迹，都将保存在记录仪中。expeditions[i] 表示小扣第 i 次探险记录，用一
//个字符串数组表示。其中的每个「营地」由大小写字母组成，通过子串 -> 连接。
//例："Leet->code->Campsite"，表示到访了 "Leet"、"code"、"Campsite" 三个营地。
//expeditions[0] 包含了初始小扣已知的所有营地；对于之后的第 i 次探险(即 expeditions[i] 且 i > 0)，
//如果记录中包含了之前均没出现的营地，则表示小扣 新发现 的营地。请你找出小扣发现新营地最多且索引最小的那次探险，
//并返回对应的记录索引。如果所有探险记录都没有发现新的营地，返回 -1。

const { test } = require('./tools/test');

function campsiteExploration(expeditions) {
  let minIdx = -1;
  const set = new Set();
  const arr = expeditions[0].split('->');
  set.add(...arr);
  let lastCount = set.size;
  let maxAddCount = 0;
  for (let i = 1; i < expeditions.length; i++) {
    const addArr = expeditions[i].split('->');
    set.add(...addArr);
    const addCount = set.size - lastCount;
    if (addCount > maxAddCount) {
      minIdx = i;
      maxAddCount = addCount;
    }
    lastCount = set.size;
  }
  return minIdx;
}

const inputValue = ['a->b->c', 'a->c', 'd->e->f-g', 'b->g', 'm->n-f'];
test(campsiteExploration, inputValue);
