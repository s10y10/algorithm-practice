function Stack() {
  this.data = [];
  this.push = function (value) {
    this.data.unshift(value);
  };
  this.pop = function () {
    return this.data.shift();
  };
  this.size = function () {
    return this.data.length;
  };
  this.top = function () {
    return this.data[0];
  };
  this.bottom = function () {
    return this.data[this.data.length - 1];
  };
}

module.exports = {
  Stack,
};
