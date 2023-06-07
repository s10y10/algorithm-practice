//某学校举行运动会,学生们按编号(1、2、3.....n) 进行标识,

//现需要按照身高由低到高排列，对身高相同的人，按体重由轻到重排列，对于身高体重都相同的人，维持原有的编号顺序关系。

//请输出排列后的学生编号

//输入描述
//两个序列，每个序列由 n 个正整数组成(0 < n < 100)。第一个序列中的数值代表身高，第二个序列中的数值代表体重。

//输出描述
//排列结果，每个数值都是原始序列中的学生编号，编号从 1 开始

const { test } = require('./tools/test');

function heightSorting(arr) {
  const students = arr[0].map((height, idx) => {
    return {
      id: idx + 1,
      h: height,
      w: arr[1][idx],
    };
  });
  students.sort((a, b) => {
    if (a.h === b.h) {
      return a.w - b.w;
    } else {
      return a.h - b.h;
    }
  });
  return students.map((stu) => stu.id);
}

const inputValue1 = [
  [100, 100, 120, 130],
  [40, 30, 60, 50],
]; //2134
const inputValue2 = [
  [90, 110, 90],
  [45, 60, 45],
]; //132
test(heightSorting, inputValue1);
test(heightSorting, inputValue2);
