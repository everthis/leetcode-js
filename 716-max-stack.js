/**
 * initialize your data structure here.
 */
const MaxStack = function() {
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
  this.stack.push(x)
}

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
  return this.stack.pop()
}

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
  return Math.max(...this.stack)
}

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
  let max = Number.MIN_SAFE_INTEGER
  let k = 0
  if (this.stack.length == 1) {
    return this.stack.pop()
  }
  for (let i = 0; i < this.stack.length; i++) {
    if (max <= this.stack[i]) {
      max = this.stack[i]
      k = i
    }
  }
  this.stack.splice(k, 1)
  return max
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
