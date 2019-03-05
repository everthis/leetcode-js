
const FreqStack = function() {
  this.stack = Array.from({length: 10001}, () => [])
  this.maxf = 0
  this.freq = {}
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  if(!this.freq[x]) this.freq[x] = 0
  this.freq[x]++
  if(this.freq[x] > this.maxf) this.maxf = this.freq[x]
  this.stack[this.freq[x]].push(x)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  let res = this.stack[this.maxf].pop()
  if(this.stack[this.maxf].length === 0) this.maxf--
  this.freq[res]--
  return res
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
