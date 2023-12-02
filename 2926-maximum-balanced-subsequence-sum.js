/**
 * @param {number[]} nums
 * @return {number}
 */
const maxBalancedSubsequenceSum = (nums) => {
  const stack = [[-Infinity, 0]]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      const key = nums[i] - i

      let left = 0,
        right = stack.length - 1
      while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (stack[mid][0] <= key) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      if (stack[left][0] <= key) left++
      const sum = nums[i] + Math.max(0, stack[left - 1][1])
      if (left === stack.length) {
        stack.push([key, sum])
      } else {
        stack.splice(left, 0, [key, sum])
      }
      let k = left + 1
      while (k < stack.length && sum >= stack[k][1]) {
        stack.splice(k, 1)
      }
    }
  }

  if (stack.length > 1) {
    return stack[stack.length - 1][1]
  }

  return Math.max(...nums)
}

// another

////////////////////// Template /////////////////////////////////
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
      let mid = parseInt((lo + hi) / 2)
      a[mid] > x ? (hi = mid) : (lo = mid + 1)
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
      let mid = parseInt((lo + hi) / 2)
      a[mid] < x ? (lo = mid + 1) : (hi = mid)
    }
    return lo
  }
}

function SegmentTreeRMQArray(A) {
  // max
  let n = A.length,
    h = Math.ceil(Math.log2(n)),
    len = 2 * 2 ** h,
    a = Array(len).fill(Number.MIN_SAFE_INTEGER)
  h = 2 ** h
  initializeFromArray()
  return { update, maxx, tree }
  function initializeFromArray() {
    for (let i = 0; i < n; i++) a[h + i] = A[i]
    for (let i = h - 1; i >= 1; i--) pushup(i)
  }
  function update(pos, v) {
    a[h + pos] = v
    for (let i = parent(h + pos); i >= 1; i = parent(i)) pushup(i)
  }
  function pushup(i) {
    a[i] = Math.max(a[left(i)], a[right(i)])
  }
  function maxx(l, r) {
    // [l, r)
    let max = Number.MIN_SAFE_INTEGER
    if (l >= r) return max
    l += h
    r += h
    for (; l < r; l = parent(l), r = parent(r)) {
      if (l & 1) max = Math.max(max, a[l++])
      if (r & 1) max = Math.max(max, a[--r])
    }
    return max
  }
  function parent(i) {
    return i >> 1
  }
  function left(i) {
    return 2 * i
  }
  function right(i) {
    return 2 * i + 1
  }
  function tree() {
    return a
  }
}
/////////////////////////////////////////////////////////////
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxBalancedSubsequenceSum = (a) => {
  let vals = a.map((x, i) => x - i).sort((x, y) => x - y)
  vals = [...new Set(vals)]
  let n = a.length,
    st = new SegmentTreeRMQArray(Array(n + 1).fill(Number.MIN_SAFE_INTEGER)),
    bi = new Bisect()
  for (let i = 0; i < n; i++) {
    let v = a[i] - i,
      idx = bi.bisect_left(vals, v)
    let max = st.maxx(0, idx + 1) // query [0, idx]
    if (max < 0) max = 0
    st.update(idx, a[i] + max) // each time accumulate previous [0, idx] max, and update new max sum
  }
  return st.maxx(0, n + 1) // query [0, n]
}
