/**
 * @param {number[]} nums
 * @return {number}
 */
const mi = Math.min,
  abs = Math.abs
const minimumDifference = (nums) => {
  let m = nums.length,
    n = m >> 1
  let a = initializeGraph(n + 1)
  let b = initializeGraph(n + 1)
  for (let i = 0; i < 1 << n; i++) {
    // mask
    let sum = 0,
      cnt = 0
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        // bit of 1's
        sum += nums[j]
        cnt++ // bit count
      } else {
        sum -= nums[j]
      }
    }
    a[cnt].push(sum)
    ;(sum = 0), (cnt = 0)
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        sum += nums[n + j]
        cnt++
      } else {
        sum -= nums[n + j]
      }
    }
    b[cnt].push(sum)
  }
  for (let i = 0; i < n; i++) {
    a[i].sort((x, y) => x - y)
    b[i].sort((x, y) => x - y)
  }
  let res = Number.MAX_SAFE_INTEGER
  let bi = new Bisect()
  for (let i = 0; i <= n; i++) {
    for (const x of a[i]) {
      let idx = bi.bisect_left(b[n - i], -x) // binary search   lower_bound
      if (idx != b[n - i].length) res = mi(res, abs(x + b[n - i][idx]))
      if (idx != 0) {
        idx--
        res = mi(res, abs(x + b[n - i][idx]))
      }
    }
  }
  return res
}

//////////////////////////////////////// Template ////////////////////////////////////////////////////////
function Bisect() {
  return { insort_right, insort_left, bisect_left, bisect_right }
  function insort_right(a, x, lo = 0, hi = null) {
    lo = bisect_right(a, x, lo, hi)
    a.splice(lo, 0, x)
  }
  function bisect_right(a, x, lo = 0, hi = null) {
    // > upper_bound
    if (lo < 0) throw new Error('lo must be non-negative')
    if (hi == null) hi = a.length
    while (lo < hi) {
      let mid = (lo + hi) >> 1
      x < a[mid] ? (hi = mid) : (lo = mid + 1)
    }
    return lo
  }
  function insort_left(a, x, lo = 0, hi = null) {
    lo = bisect_left(a, x, lo, hi)
    a.splice(lo, 0, x)
  }
  function bisect_left(a, x, lo = 0, hi = null) {
    // >= lower_bound
    if (lo < 0) throw new Error('lo must be non-negative')
    if (hi == null) hi = a.length
    while (lo < hi) {
      let mid = (lo + hi) >> 1
      a[mid] < x ? (lo = mid + 1) : (hi = mid)
    }
    return lo
  }
}

const initializeGraph = (n) => {
  let G = []
  for (let i = 0; i < n; i++) {
    G.push([])
  }
  return G
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

