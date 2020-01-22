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

// another

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
const ZigzagIterator = function ZigzagIterator(v1, v2) {
  const A = [v1, v2]
  this.A = A
  this.n = A.length
  this.m = Math.max(v1.length, v2.length)
  this.j = 0
  this.i = 0
}

/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.j < this.m
}

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.incrementPointers = function incrementPointers() {
  this.i += 1
  if (this.i === this.n) {
    this.j += 1
    this.i = 0
  }
}

ZigzagIterator.prototype.next = function next() {
  let next = undefined
  while (next === undefined) {
    next = this.A[this.i][this.j]
    this.incrementPointers()
  }
  while (this.hasNext()) {
    if (this.A[this.i][this.j] !== undefined) break
    this.incrementPointers()
  }
  return next
}

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

// another

/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
const ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.queue = []
  if (v1.length > 0) {
    const it = v1[Symbol.iterator]()
    const res = it.next()
    this.queue.push({ it, res })
  }
  if (v2.length > 0) {
    const it = v2[Symbol.iterator]()
    const res = it.next()
    this.queue.push({ it, res })
  }
}
/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.queue.length > 0
}
/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  const { it, res } = this.queue.shift()
  const { value } = res
  const res1 = it.next()
  if (!res1.done) this.queue.push({ it, res: res1 })
  return value
}
/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

