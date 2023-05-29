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
}

module.exports = {
  Stack,
};
