/**
 * Initialize your data structure here.
 * @param {number} size
 */
const MovingAverage = function(size) {
  this.limit = size
  this.arr = []
  this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.arr.push(val)
  this.sum += val
  if(this.arr.length > this.limit) {
    const tmp = this.arr[0]
    this.arr.shift()
    this.sum -= tmp
  }
  return this.sum / this.arr.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
