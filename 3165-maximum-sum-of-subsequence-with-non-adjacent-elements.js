const M = 1e9 + 7
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maximumSumSubsequence = function (nums, queries) {
  const n = nums.length
  const root = new SegTreeNode(0, n - 1, nums)
  let res = 0
  for (const q of queries) {
    root.updateRange(q[0], q[1])
    res += Math.max(root.info00, root.info01, root.info10, root.info11)
    res %= M
  }
  return res
}

class SegTreeNode {
  constructor(a, b, vals) {
    this.left = null
    this.right = null
    this.start = a
    this.end = b
    if (a === b) {
      this.info11 = vals[a]
      this.info01 = -1e18
      this.info10 = -1e18
      this.info00 = 0
      return
    }
    const mid = Math.floor((a + b) / 2)
    this.left = new SegTreeNode(a, mid, vals)
    this.right = new SegTreeNode(mid + 1, b, vals)
    this.info11 = Math.max(
      this.left.info10 + this.right.info01,
      this.left.info11 + this.right.info01,
      this.left.info10 + this.right.info11,
    )
    this.info00 = Math.max(
      this.left.info00 + this.right.info00,
      this.left.info01 + this.right.info00,
      this.left.info00 + this.right.info10,
    )
    this.info10 = Math.max(
      this.left.info10 + this.right.info00,
      this.left.info10 + this.right.info10,
      this.left.info11 + this.right.info00,
    )
    this.info01 = Math.max(
      this.left.info00 + this.right.info01,
      this.left.info01 + this.right.info01,
      this.left.info00 + this.right.info11,
    )
  }

  updateRange(a, val) {
    if (a < this.start || a > this.end) {
      return
    }
    if (this.start === this.end) {
      this.info00 = 0
      this.info11 = val
      return
    }
    this.left.updateRange(a, val)
    this.right.updateRange(a, val)
    this.info11 = Math.max(
      this.left.info10 + this.right.info01,
      this.left.info11 + this.right.info01,
      this.left.info10 + this.right.info11,
    )
    this.info00 = Math.max(
      this.left.info00 + this.right.info00,
      this.left.info01 + this.right.info00,
      this.left.info00 + this.right.info10,
    )
    this.info10 = Math.max(
      this.left.info10 + this.right.info00,
      this.left.info10 + this.right.info10,
      this.left.info11 + this.right.info00,
    )
    this.info01 = Math.max(
      this.left.info00 + this.right.info01,
      this.left.info01 + this.right.info01,
      this.left.info00 + this.right.info11,
    )
  }
}

// another


/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maximumSumSubsequence = function (nums, queries) {
  const ninf = -Infinity
  const mod = 1e9 + 7
  const n = nums.length
  let tree = new Tree(n)

  for (let i = 0; i < n; ++i) {
    tree.modify(1, 0, tree.nn, i, nums[i])
  }
  for (let i = n; i < tree.nn; ++i) {
    tree.modify(1, 0, tree.nn, i, 0)
  }

  let res = 0

  for (let q of queries) {
    let pos = q[0]
    let x = q[1]
    tree.modify(1, 0, tree.nn, pos, x)
    res += mod + (tree.query() % mod) // [0, 2*mod)
  }

  res %= mod
  return res
}

class Tree {
  constructor(n) {
    this.nn = n
    this.space = new Array(4 * n + 1).fill(null).map(() => ({
      mx: [
        [0, -0x1ffffffffffff],
        [-0x1ffffffffffff, 0],
      ],
    }))
    for (;;) {
      let low_bit = this.nn & -this.nn
      if (low_bit == this.nn) {
        break
      }
      this.nn += low_bit
    }
  }

  modify(index, sl, sr, q, qv) {
    let v = this.space[index]
    if (sl + 1 == sr) {
      v.mx = [
        [0, -0x1ffffffffffff],
        [-0x1ffffffffffff, qv],
      ]
      return
    }
    let m = (sl + sr) >> 1
    if (q < m) {
      this.modify(index * 2, sl, m, q, qv)
    } else {
      this.modify(index * 2 + 1, m, sr, q, qv)
    }
    let l = this.space[index * 2]
    let r = this.space[index * 2 + 1]
    for (let lb of [0, 1]) {
      for (let rb of [0, 1]) {
        let ans = -0x1ffffffffffff
        ans = Math.max(ans, l.mx[lb][1] + r.mx[0][rb])
        ans = Math.max(ans, l.mx[lb][0] + r.mx[1][rb])
        ans = Math.max(ans, l.mx[lb][0] + r.mx[0][rb])
        v.mx[lb][rb] = ans
      }
    }
  }

  query() {
    let v = this.space[1]
    let ans = -0x1ffffffffffff
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        ans = Math.max(ans, v.mx[i][j])
      }
    }
    return ans
  }
}
