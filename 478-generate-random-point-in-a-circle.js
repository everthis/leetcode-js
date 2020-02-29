/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
const Solution = function(radius, x_center, y_center) {
  this.radius = radius
  this.x_center = x_center
  this.y_center = y_center
}

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
  let len = Math.sqrt(Math.random()) * this.radius
  let deg = Math.random() * 2 * Math.PI
  let x = this.x_center + len * Math.cos(deg)
  let y = this.y_center + len * Math.sin(deg)
  return [x, y]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
