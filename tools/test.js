function test(fn, ...inputArg) {
  console.time('a');
  const result = fn ? fn.apply(null, inputArg) : undefined;
  console.timeEnd('a');
  console.log(result);
}

module.exports = {
  test,
};
