/**
 * @param {string} homepage
 */
const BrowserHistory = function(homepage) {
  this.idx = 0
  this.arr = [homepage]
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  const n = this.arr.length
  this.arr.splice(this.idx + 1, n - this.idx - 1, url)
  this.idx++
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  const idx = this.idx
  let tmp = idx - steps
  if(tmp < 0) {
    this.idx = 0
    return this.arr[0]
  } else {
    this.idx = tmp
    return this.arr[tmp]
  }
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  const n = this.arr.length
  let tmp = this.idx + steps
  if(tmp >= n) {
    this.idx  = n - 1
    return this.arr[n - 1]
  } else {
    this.idx = tmp
    return this.arr[tmp]
  }
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
