/**
 * @param {string} characters
 * @param {number} combinationLength
 */
const CombinationIterator = function (characters, combinationLength) {
  this.arr = build(combinationLength, characters.split('').sort().join(''))
  this.pos = 0
}

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  if (this.pos < this.arr.length) {
    return this.arr[this.pos++]
  }
}

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.pos < this.arr.length
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
function build(max, str, out = [], curr = '') {
  if (curr.length === max) {
    out.push(curr)
    return
  } else {
    for (let i = 0; i < str.length; i++) {
      build(max, str.slice(i + 1), out, curr + str[i])
    }
  }

  return out
}
