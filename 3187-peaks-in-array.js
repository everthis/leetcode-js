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

// another

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var countOfPeaks = function (nums, queries) {
    const n = nums.length
    const peak = new Array(n).fill(0)

    for (let i = 1; i < n - 1; ++i) {
      if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) peak[i] = 1
    }

    const ans = []
    const st = new SegmentTree(n)
    st.build(0, 0, n - 1, peak)

    for (let i = 0; i < queries.length; ++i) {
      const q = queries
      const type = q[i][0]

      if (type === 1) {
        const l = q[i][1]
        const r = q[i][2]

        if (l === r) {
          ans.push(0)
          continue
        }

        let red = 0

        if (peak[l] === 1) ++red

        if (peak[r] === 1) ++red

        const res = st.query(0, 0, n - 1, l, r)
        ans.push(res - red)
      } else if (type === 2) {
        const p = q[i][1]
        const x = q[i][2]

        nums[p] = x

        if (p - 1 >= 0 && p + 1 < n) {
          if (nums[p] > nums[p - 1] && nums[p] > nums[p + 1]) {
            st.update(0, 0, n - 1, p, 1)
            peak[p] = 1
          } else {
            st.update(0, 0, n - 1, p, 0)
            peak[p] = 0
          }
        }

        if (p - 2 >= 0 && p < n) {
          if (nums[p - 1] > nums[p - 2] && nums[p - 1] > nums[p]) {
            st.update(0, 0, n - 1, p - 1, 1)
            peak[p - 1] = 1
          } else {
            st.update(0, 0, n - 1, p - 1, 0)
            peak[p - 1] = 0
          }
        }

        if (p >= 0 && p + 2 < n) {
          if (nums[p + 1] > nums[p] && nums[p + 1] > nums[p + 2]) {
            st.update(0, 0, n - 1, p + 1, 1)
            peak[p + 1] = 1
          } else {
            st.update(0, 0, n - 1, p + 1, 0)
            peak[p + 1] = 0
          }
        }
      }
    }

    return ans
}

class SegmentTree {
  constructor(n) {
    this.seg = new Array(4 * n + 1).fill(0)
  }

  build(ind, low, high, arr) {
    if (low === high) {
      this.seg[ind] = arr[low]
      return
    }

    const mid = Math.floor((low + high) / 2)

    this.build(2 * ind + 1, low, mid, arr)
    this.build(2 * ind + 2, mid + 1, high, arr)

    this.seg[ind] = this.seg[2 * ind + 1] + this.seg[2 * ind + 2]
  }

  query(ind, low, high, l, r) {
    if (r < low || high < l) return 0

    if (low >= l && high <= r) return this.seg[ind]

    const mid = Math.floor((low + high) / 2)
    const left = this.query(2 * ind + 1, low, mid, l, r)
    const right = this.query(2 * ind + 2, mid + 1, high, l, r)

    return left + right
  }

  update(ind, low, high, i, val) {
    if (low === high) {
      this.seg[ind] = val
      return
    }

    const mid = Math.floor((low + high) / 2)

    if (i <= mid) this.update(2 * ind + 1, low, mid, i, val)
    else this.update(2 * ind + 2, mid + 1, high, i, val)

    this.seg[ind] = this.seg[2 * ind + 1] + this.seg[2 * ind + 2]
  }
}

