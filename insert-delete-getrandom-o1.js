var RandomizedSet = function () {
  this.data = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.data.has(val)) {
    return false;
  } else {
    this.data.add(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.data.has(val)) {
    this.data.delete(val);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const len = this.data.size;
  const randomIndex = Math.trunc(Math.random() * len);
  const arr = Array.from(this.data.values());
  return arr[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
var param_1 = obj.insert(3);
var param_3 = obj.getRandom();
console.log(param_3);
