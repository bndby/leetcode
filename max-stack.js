// https://leetcode.com/problems/max-stack/
var MaxStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  return Math.max(...this.stack);
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  const max = this.peekMax();
  maxIndex = this.stack.lastIndexOf(max);
  return this.stack.splice(maxIndex, 1);
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
