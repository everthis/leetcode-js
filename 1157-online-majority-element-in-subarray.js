function Bisect() {
  return { insort_right, insort_left, bisect_left, bisect_right }
  function insort_right(a, x, lo = 0, hi = null) {
    lo = bisect_right(a, x, lo, hi)
    a.splice(lo, 0, x)
  }
  function bisect_right(a, x, lo = 0, hi = null) {
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
    if (lo < 0) throw new Error('lo must be non-negative')
    if (hi == null) hi = a.length
    while (lo < hi) {
      let mid = (lo + hi) >> 1
      a[mid] < x ? (lo = mid + 1) : (hi = mid)
    }
    return lo
  }
}

function SegmentTreeRQ(m, A, n) {
  let bisect = new Bisect()
  let h = Math.ceil(Math.log2(n))
  const MAX = 2 * 2 ** h - 1
  let tree = Array(MAX).fill(-1)
  let a = [...A]
  build(1, 0, n - 1)
  return {
    query,
  }

  function build(vi, tl, tr) {
    if (tl == tr) {
      tree[vi] = a[tl]
      return
    }
    let mid = getMid(tl, tr)
    build(vi * 2, tl, mid)
    build(vi * 2 + 1, mid + 1, tr)
    if (
      tree[vi * 2] != -1 &&
      get_occurrence(tree[vi * 2], tl, tr) * 2 > tr - tl + 1
    ) {
      tree[vi] = tree[vi * 2]
    } else if (
      tree[vi * 2 + 1] != -1 &&
      get_occurrence(tree[vi * 2 + 1], tl, tr) * 2 > tr - tl + 1
    ) {
      tree[vi] = tree[vi * 2 + 1]
    }
  }

  function query(vi, l, r, tl, tr) {
    if (l > tr || r < tl) {
      return {
        first: -1,
        second: -1,
      }
    }
    if (tl <= l && r <= tr) {
      if (tree[vi] == -1)
        return {
          first: -1,
          second: -1,
        }
      let occ = get_occurrence(tree[vi], tl, tr)
      if (occ * 2 > tr - tl + 1) {
        return {
          first: tree[vi],
          second: occ,
        }
      } else {
        return {
          first: -1,
          second: -1,
        }
      }
    }
    let mid = getMid(l, r)
    let resL = query(vi * 2, l, mid, tl, tr)
    if (resL.first > -1) return resL
    let resR = query(vi * 2 + 1, mid + 1, r, tl, tr)
    if (resR.first > -1) return resR
    return {
      first: -1,
      second: -1,
    }
  }

  function get_occurrence(num, l, r) {
    // only difference
    if (!m.has(num)) return 0
    let a = m.get(num)
    let lbv = bisect.bisect_left(a, l) //lower_bound
    if (lbv == a.length) return 0
    let ubv = bisect.bisect_right(a, r) // upper_bound
    return ubv - lbv
  }

  function getMid(low, high) {
    return low + ((high - low) >> 1)
  }
}

function MajorityChecker(a) {
  let m = new Map()
  let n = a.length
  for (let i = 0; i < n; i++) {
    if (!m.has(a[i])) m.set(a[i], [])
    m.get(a[i]).push(i)
  }
  let st = new SegmentTreeRQ(m, a, n)
  return {
    query,
  }

  function query(left, right, threshold) {
    let res = st.query(1, 0, n - 1, left, right)
    if (res.second >= threshold) {
      return res.first
    }
    return -1
  }
}

// another


/**
 * @param {number[]} arr
 */
const MajorityChecker = function(arr) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) map.set(arr[i], [i])
    else map.get(arr[i]).push(i)
  }
  this.pos = map
  this.arr = arr
}

function lbs(arr, val) {
  let lo = 0
  let hi = arr.length - 1
  if (arr[0] >= val) return 0
  else if (arr[hi] < val) return Infinity
  let mid
  while (hi - lo > 1) {
    mid = (hi + lo) >> 1
    if (arr[mid] === val) return mid
    else if (arr[mid] < val) lo = mid
    else if (arr[mid] > val) hi = mid
  }
  return hi
}

function rbs(arr, val) {
  let lo = 0
  let hi = arr.length - 1
  if (arr[hi] <= val) return hi
  else if (arr[lo] > val) return -Infinity
  let mid
  while (hi - lo > 1) {
    mid = (hi + lo) >> 1
    if (arr[mid] === val) return mid
    else if (arr[mid] < val) lo = mid
    else if (arr[mid] > val) hi = mid
  }
  return lo
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
  const { arr, pos } = this
  let c = 20
  while (c--) {
    const idx = left + Math.floor(Math.random() * (right - left + 1))
    const sort = pos.get(arr[idx])
    const lidx = lbs(sort, left)
    const ridx = rbs(sort, right)
    if (ridx - lidx + 1 >= threshold) return arr[idx]
  }
  return -1
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
