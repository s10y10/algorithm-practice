//小王在进行游戏大闯关，有一个关卡需要输入一个密码才能通过，密码获得的条件如下：
//在一个密码本中，每一页都有一个由 26 个小写字母组成的若干位密码，
//从它的末尾开始依次去掉一位得到的新密码也在密码本中存在。请输出符合要求的密码，
//如果由多个符合要求的密码，则返回字典序最大的密码。若没有符合要求的密码，则返回空字符串。

//输入
//密码本由一个字符串数组组成，不同元素之间使用空格隔开，每一个元素代表密码本每一页的密码。

//输出
//一个字符串

const { test } = require('./tools/test');

function maximumPassword(str) {
  const book = str.split(' ').sort();
  const set = new Set();
  set.add('');
  let res;
  book.forEach((p) => {
    const s = p.substr(0, p.length - 1);
    if (set.has(s)) {
      set.add(p);
      res = p;
    }
  });
  return res || book[0];
}

const inputValue1 = 'h he hel hell hello'; //hello
const inputValue2 = 'b eredderd bw bww bwwl bwwlm bwwln'; //bwwln
test(maximumPassword, inputValue1);
test(maximumPassword, inputValue2);
