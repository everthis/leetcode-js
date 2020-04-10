/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = []
  this.min = null
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.min === null) {
    this.min = x
  } else {
    this.min = Math.min(x, this.min)
  }
  return this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let removed = this.stack.pop()
  if (this.min === removed) {
    this.min = this.stack.length > 0 ? Math.min(...this.stack) : null
  }
  return this.stack
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
