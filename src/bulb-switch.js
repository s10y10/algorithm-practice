//初始时有 n 个灯泡处于关闭状态。第一轮，你将会打开所有灯泡。接下来的第二轮，你将会
//每两个灯泡关闭第二个。 第三轮，你每三个灯泡就切换第三个灯泡的开关（即，打开变关闭，关闭变打开）。第 i 轮，你
//每 i 个灯泡就切换第 i 个灯泡的开关。对于第 n 轮，你只切换最后一个灯泡的开关。找出 n 轮后有多少个亮着的灯泡。

//思路：
//这道题的解法是找规律。我们可以发现，对于一个数i，如果它有奇数个因子，则最终会被翻转；如果它有偶数个因子，则最终
//不会被翻转。而对于一个数i来说，它的因子都是成对出现的，比如12的因子有1、2、3、4、6、12，其中1和12是一对，2和6是
//一对，3和4是一对。所以只有当i为完全平方数时才会被翻转。
//因此我们只需要找出n以内完全平方数的个数即可。代码如下：

const { test } = require('./tools/test');

function bulbSwitch(n) {
  return Math.floor(Math.sqrt(n));
}

const inputValue = 10;
test(bulbSwitch, inputValue);
