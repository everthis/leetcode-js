
const FrontMiddleBackQueue = function() {
  this.arr = []
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.arr.unshift(val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  const len = this.arr.length
  const mid = Math.floor(len / 2)
  this.arr.splice(mid, 0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.arr.push(val)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  const tmp = this.arr.shift()
  return tmp == null ? -1 : tmp
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  const len = this.arr.length
  const mid = len % 2 === 0 ? Math.floor(len / 2) - 1 : ((len / 2) >> 0)
  if(len === 2) return this.arr.shift()
  const [tmp] = this.arr.splice(mid, 1)
  return tmp == null ? -1 : tmp
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  const tmp = this.arr.pop()
  return tmp == null ? -1 : tmp
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
