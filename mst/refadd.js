function add(i = 1, sum = 0, end = 100) {
  if (i > end) return sum;
  sum += i;
  return add(++i, sum);
}

const result = add();
console.log(result);
