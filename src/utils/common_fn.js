Array.prototype.removeArr = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

Array.prototype.removeObjArr = function(item, key) {
  let index = this.findIndex(e => e[key] === item[key]);
  if (index != -1) {
    this.splice(index, 1);
  }
};

Array.prototype.updateArr = function(oldVal, newVal) {
  var index = this.indexOf(oldVal);
  if (index > -1) {
    this.splice(index, 1, newVal);
  }
};

Array.prototype.updateObjArr = function(index, newItem) {
  if (index != -1) {
    this.splice(index, 1, newItem);
  }
};
