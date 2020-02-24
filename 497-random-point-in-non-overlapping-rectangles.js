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

// another

/**
 * @param {number[][]} rects
 */
const Solution = function(rects) {
  const xywhs = []
  const acc_sums = [0]
  let sum = 0
  for (const [x, y, x2, y2] of rects) {
    const w = x2 - x + 1
    const h = y2 - y + 1
    xywhs.push({ x, y, w, h })
    sum += w * h
    acc_sums.push(sum)
  }
  this.xywhs = xywhs
  this.acc_sums = acc_sums
}

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
  const picked = Math.floor(
    Math.random() * this.acc_sums[this.acc_sums.length - 1]
  )
  let i = 0
  for (; i < this.acc_sums.length - 2; i++) {
    if (picked >= this.acc_sums[i] && picked < this.acc_sums[i + 1]) {
      break
    }
  }
  const { x, y, w, h } = this.xywhs[i]
  return [x + Math.floor(Math.random() * w), y + Math.floor(Math.random() * h)]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

