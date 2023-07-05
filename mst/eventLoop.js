"script start";
"script end";
"promise1";
"promise3";
"promise2";
"setTimeout--0";
"setTimeout--200";
"promise5";
"inner-setTimout--0";

Promise.resolve()
  .then(function () {
    console.log(1);
  })
  .then(function () {
    console.log(2);
  });
console.log(3);
