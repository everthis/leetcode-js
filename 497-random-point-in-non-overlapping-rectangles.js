/**
 * @param {number[][]} rects
 */
const Solution = function(rects) {
  this.rects = rects
  this.areas = rects.map(([x1, y1, x2, y2]) => (x2 - x1 + 1) * (y2 - y1 + 1))
}

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
  const { rects, areas } = this
  let areaSum = 0
  let selected
  for (let i = 0; i < rects.length; i++) {
    const area = areas[i]
    areaSum += area
    const p = area / areaSum
    if (Math.random() < p) {
      selected = rects[i]
    }
  }
  const [x1, y1, x2, y2] = selected
  return [
    ((Math.random() * (x2 - x1 + 1)) | 0) + x1,
    ((Math.random() * (y2 - y1 + 1)) | 0) + y1
  ]
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
