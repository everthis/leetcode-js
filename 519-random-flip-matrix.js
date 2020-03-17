/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
const Solution = function(n_rows, n_cols) {
  this.r = n_rows
  this.c = n_cols
  this.total = n_rows * n_cols
  this.m = new Map()
}

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
  const r = (Math.random() * this.total--) >> 0
  const i = this.m.get(r) || r
  this.m.set(r, this.m.get(this.total) || this.total)
  return [(i / this.c) >> 0, i % this.c]
}

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
  this.m.clear()
  this.total = this.c * this.r
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(n_rows, n_cols)
 * var param_1 = obj.flip()
 * obj.reset()
 */
