/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
const ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.collection = []
  if (v1 !== null && v1.length !== 0) {
    this.collection.push(v1)
  }
  if (v2 !== null && v2.length !== 0) {
    this.collection.push(v2)
  }
}

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.collection.length > 0
}

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  if (this.collection[0].length === 1) {
    return this.collection.shift()[0]
  } else {
    let v = this.collection.shift()
    this.collection.push(v)
    return v.shift()
  }
}

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
