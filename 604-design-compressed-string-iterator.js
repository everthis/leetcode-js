/**
 * @param {string} compressedString
 */
const StringIterator = function(compressedString) {
  const s = compressedString.replace(/[a-zA-Z]/g,'-')
  const ss = compressedString.replace(/[0-9]+/g, '-')
  const sa = s.split('-').filter(e => !!e).map(e => +e)
  const ssa = ss.split('-').filter(e => !!e)
  this.idx = 0
  this.charArr = ssa
  this.numArr = sa
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
  let res = ' '
  if(this.idx >= this.numArr.length) return res
  if(this.numArr[this.idx]) res = this.charArr[this.idx]
  this.numArr[this.idx]--
  if(this.numArr[this.idx] === 0) this.idx++
  return res
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
  return this.numArr[this.idx] > 0
};

/** 
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
