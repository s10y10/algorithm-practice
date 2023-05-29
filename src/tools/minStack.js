function MinStack() {
  this.data = [];
  this.minData = [];
  this.push = function (value) {
    this.data.unshift(value);
    if (this.minData.length === 0 || value < this.minData[0]) {
      this.minData.unshift(value);
    }
  };
  this.pop = function () {
    const value = this.data.shift();
    if (value === this.minData[0]) {
      this.minData.shift();
    }
    return value;
  };
  this.size = function () {
    return this.data.length;
  };
  this.min = function () {
    return this.minData[0];
  };
  this.top = function () {
    return this.data[0];
  };
}

module.exports = {
  MinStack,
};
