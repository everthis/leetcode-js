/**
 * @param {number[][]} v
 */
const Vector2D = function(v) {
  this.a = []
  this.idx = 0
  v.forEach(el => this.a.push(...el))
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
  return this.a[this.idx++]
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
  return this.idx <= this.a.length - 1
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// another

/**
 * @param {number[][]} v
 */
const Vector2D = function(v) {
  this.iterator = v[Symbol.iterator]()
  this.row = this.iterator.next()
  this.idx = 0
}
/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
  if (this.hasNext()) {
    return this.row.value[this.idx++]
  }
}
/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
  while (this.row.done == false && this.idx == this.row.value.length) {
    this.row = this.iterator.next()
    this.idx = 0
  }
  return this.row.done == false
}
/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
