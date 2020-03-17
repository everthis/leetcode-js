/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
const Solution = function(n_rows, n_cols) {
  this.r = n_rows
  this.c = n_cols
  this.m = new Map()
  this.total = n_rows * n_cols
}

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
  const rand = Math.random()
  const r = (rand * this.total--) >> 0
  let x = this.m.get(r) || r
  this.m.set(r, this.m.get(this.total) || this.total)
  return [(x / this.c) >> 0, x % this.c]
}

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
  this.m.clear()
  this.total = this.r * this.c
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n_rows, n_cols)
 * var param_1 = obj.flip()
 * obj.reset()
 */
