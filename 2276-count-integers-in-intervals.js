var CountIntervals = function() {
  this.intervals = []
  this.ans = 0
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function(left, right) {
  let l = 0, r = this.intervals.length
  while (l < r) {
    const m = Math.floor((l + r) / 2)
    if (this.intervals[m][1] >= left) {
      r = m
    } else {
      l = m + 1
    }
  }
  
  let index = l
  while (index < this.intervals.length && this.intervals[index][0] <= right) {
    left = Math.min(left, this.intervals[index][0])
    right = Math.max(right, this.intervals[index][1])
    this.ans -= this.intervals[index][1] - this.intervals[index][0] + 1
    index += 1
  }
  this.ans += right - left + 1
  this.intervals.splice(l, index - l, [left, right])
};


/**
 * @return {number}
 */
CountIntervals.prototype.count = function() {
  return this.ans
};

// another

function binarySearch(l, r, fn) {
  while (l <= r) {
    const m = Math.floor((l + r) / 2)
    if (fn(m)) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return r
}

var CountIntervals = function () {
  this.intervals = []
  this.size = 0
}

/**
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function (left, right) {
  const intervals = this.intervals
  if (!intervals.length) {
    intervals.push({ left, right })
    this.size += right - left + 1
  } else if (left > intervals[intervals.length - 1].right) {
    intervals.push({ left, right })
    this.size += right - left + 1
  } else if (right < intervals[0].left) {
    intervals.unshift({ left, right })
    this.size += right - left + 1
  } else {
    const i = binarySearch(0, intervals.length - 1, (x) => {
      return intervals[x].left < left
    })
    let j,
      start,
      end,
      sum = 0
    if (i < 0 || intervals[i].right < left) {
      j = i + 1
      start = left
      end = right
    } else {
      j = i
      start = intervals[j].left
      end = right
    }
    let first = -1
    while (j < intervals.length && right >= intervals[j].left) {
      if (first < 0) first = j
      end = Math.max(end, intervals[j].right)
      sum += intervals[j].right - intervals[j].left + 1
      j++
    }
    // delete [first, j)
    // console.log('delete', j - first, '-', first, j)
    this.size += end - start + 1 - sum
    if (first < 0) {
      this.intervals.splice(i + 1, 0, { left: start, right: end })
    } else {
      this.intervals.splice(first, j - first, { left: start, right: end })
    }
  }
}

/**
 * @return {number}
 */
CountIntervals.prototype.count = function () {
  return this.size
}


// another



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
