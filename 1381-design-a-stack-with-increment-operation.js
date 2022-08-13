/**
 * @param {number} maxSize
 */
const CustomStack = function(maxSize) {
  this.stk = []
  this.size = maxSize
  this.inc = []
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if(this.stk.length === this.size) return
  this.stk.push(x)
  this.inc.push(0)
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if(this.stk.length === 0) return -1
  const e = this.stk.pop()
  const inc = this.inc.pop()
  if(this.inc.length) {
    this.inc[this.inc.length - 1] += inc
  }
  return e + inc
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  const last = Math.min(k, this.inc.length) - 1
  if(last !== -1) {
    this.inc[last] += val
  }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
