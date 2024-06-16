/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var countOfPeaks = function (nums, queries) {
  const n = nums.length
  const bit = new BIT()
  bit.init(n)
  for (let i = 0; i < n; i++) {
    if (isPeak(nums, i)) {
      bit.add(i + 1, 1)
    }
  }
  const res = []
  for (const q of queries) {
    if (q[0] === 1) {
      const [l, r] = [q[1], q[2]]
      let cnt = bit.query(r + 1) - bit.query(l)
      if (isPeak(nums, l)) {
        cnt--
      }
      if (isPeak(nums, r)) {
        cnt--
      }
      if (isPeak(nums, l) && l === r) {
        cnt++
      }
      res.push(cnt)
    } else {
      const [idx, val] = [q[1], q[2]]
      if (isPeak(nums, idx)) {
        bit.add(idx + 1, -1)
      }
      if (idx > 0 && isPeak(nums, idx - 1)) {
        bit.add(idx, -1)
      }
      if (idx < n - 1 && isPeak(nums, idx + 1)) {
        bit.add(idx + 2, -1)
      }
      nums[idx] = val
      if (isPeak(nums, idx)) {
        bit.add(idx + 1, 1)
      }
      if (idx > 0 && isPeak(nums, idx - 1)) {
        bit.add(idx, 1)
      }
      if (idx < n - 1 && isPeak(nums, idx + 1)) {
        bit.add(idx + 2, 1)
      }
    }
  }
  return res
}
function isPeak(nums, i) {
  if (i === 0 || i === nums.length - 1) {
    return false
  }
  return nums[i] > nums[i - 1] && nums[i] > nums[i + 1]
}

class BIT {
  constructor() {
    this.tree = []
  }

  init(n) {
    this.tree = new Array(n + 1).fill(0)
  }

  add(i, val) {
    while (i < this.tree.length) {
      this.tree[i] += val
      i += i & -i
    }
  }

  query(i) {
    let sum = 0
    while (i > 0) {
      sum += this.tree[i]
      i -= i & -i
    }
    return sum
  }
}
