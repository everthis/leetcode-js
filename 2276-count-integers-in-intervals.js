var CountIntervals = function () {
  this.root = new Node(1, 10 ** 9)
}

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function (left, right) {
  this.root.addInterval(left, right)
}

/**
 * @return {number}
 */
CountIntervals.prototype.count = function () {
  return this.root.total
}

/**
 * Your CountIntervals object will be instantiated and called as such:
 * var obj = new CountIntervals()
 * obj.add(left,right)
 * var param_2 = obj.count()
 */

class Node {
  constructor(min, max) {
    this.min = min
    this.max = max
    this.currentMin = -1
    this.currentMax = -1
    this.total = 0
    this.left = null
    this.right = null
  }

  addInterval(left, right) {
    if (this.currentMin < 0) {
      this.currentMin = left
      this.currentMax = right
      this.total = right - left + 1
      return this.total
    }

    const mid = (this.min + this.max) >> 1

    if (this.left) {
      if (left <= mid) this.left.addInterval(left, Math.min(mid, right))
      if (right > mid) this.right.addInterval(Math.max(mid + 1, left), right)

      this.total = this.left.total + this.right.total
      return
    }

    if (left <= this.currentMax + 1 && right >= this.currentMin - 1) {
      this.currentMin = Math.min(this.currentMin, left)
      this.currentMax = Math.max(this.currentMax, right)
      this.total = this.currentMax - this.currentMin + 1
      return
    }
    this.left = new Node(this.min, mid)
    this.right = new Node(mid + 1, this.max)

    if (left <= mid) this.left.addInterval(left, Math.min(mid, right))
    if (right > mid) this.right.addInterval(Math.max(left, mid + 1), right)
    if (this.currentMin <= mid)
      this.left.addInterval(this.currentMin, Math.min(mid, this.currentMax))
    if (this.currentMax > mid)
      this.right.addInterval(
        Math.max(mid + 1, this.currentMin),
        this.currentMax
      )

    this.total = this.left.total + this.right.total
  }
}
