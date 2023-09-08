// 当前 IT 部门支撑了子公司颗粒化业务，该部门需要实现为子公司快速开租建站的能力，建站是指在一个全新的环境部署一套 IT 服务。
// 每个站点开站会由一系列部署任务项构成，每个任务项部署完成时间都是固定和相等的，设为 1。
// 部署任务项之间可能存在依赖，假如任务 2 依赖任务 1，那么等任务 1 部署完，任务 2 才能部署。
// 任务有多个依赖任务则需要等所有依赖任务都部署完该任务才能部署。没有依赖的任务可以并行部署，优秀的员工们会做到完全并行无等待的部署。
// 给定一个站点部署任务项和它们之间的依赖关系，请给出一个站点的最短开站时间。

// 输入描述

// 第一行是任务数 taskNum，第二行是任务的依赖关系数 relationsNum

// 接下来 relationsNum 行，每行包含两个 id，描述一个依赖关系，格式为：IDi IDj，表示部署任务 i 部署完成了，部署任务 j 才能部署，
// IDi 和 IDj 值的范围为：[0, taskNum)

// 注：输入保证部署任务之间的依赖不会存在环。

// 输出描述

// 一个整数，表示一个站点的最短开站时间。

const { test } = require('./tools/test');
function fastBuildStation([task, relation, arr]) {
  const map = new Map(); // 记录依赖关系
  let floor = 0;
  for (let i = 0; i < relation; i++) {
    const [IDi, IDj] = arr[i];
    let set = map.get(IDj);
    if (!set) {
      set = new Set();
      map.set(IDj, set);
    }
    set.add(IDi);
  }

  const noRunIdSet = new Set();
  for (let i = 0; i < task; i++) {
    noRunIdSet.add(i);
  }

  console.log(map);

  while (map.size) {
    const needRunIds = [];
    noRunIdSet.forEach((id) => {
      if (!map.has(id)) {
        needRunIds.push(id);
      }
    });

    for (let i = 0; i < needRunIds.length; i++) {
      const runId = needRunIds[i];
      noRunIdSet.delete(runId);
      for (const [k, v] of map) {
        v.delete(runId);
        if (v.size === 0) {
          map.delete(k);
        }
      }
    }

    floor++;
  }

  return floor + 1;
}

const inputValue1 = [
  5,
  5,
  [
    [0, 4],
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ],
];

const inputValue2 = [
  5,
  3,
  [
    [0, 3],
    [0, 4],
    [1, 3],
  ],
];
test(fastBuildStation, inputValue1); //3
test(fastBuildStation, inputValue2); //2
