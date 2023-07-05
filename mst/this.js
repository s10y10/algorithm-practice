var a = {
  name: "a",
  getThis: function () {
    return (() => {
      return this.name;
    })();
  },
};

console.log(a.getThis());
