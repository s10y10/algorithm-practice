//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度
function noSameSubArray(arr) {
  let maxLen = 0;
  let dic = {};
  let right = 0;
  for (let left = 0; left < arr.length; left++) {
    let v = arr[right];
    while (!dic[v] && right < arr.length) {
      maxLen++;
      dic[v] = 1;
      right++;
      v = arr[right];
    }
    if (right === arr.length) {
      break;
    }
    maxLen--;
    delete dic[arr[left]];
  }
  return maxLen;
}

console.log(noSameSubArray(["p", "w", "w", "k", "e", "w", "c"]));
