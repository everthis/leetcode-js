/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
  const a = nums
  let n = a.length,
    st = new SegmentTreeRORQ(a),
    res = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < n; i++) {
    let L = i,
      R = n - 1,
      len = Number.MAX_SAFE_INTEGER
    while (L <= R) {
      const mid = L + Math.floor((R - L) / 2)
      let v = st.query(i, mid + 1)
      if (v >= k) {
        len = mid - i + 1
        R = mid - 1
      } else {
        L = mid + 1
      }
    }
    res = Math.min(res, len)
  }
  return res === Number.MAX_SAFE_INTEGER ? -1 : res
}

/////////////////////////// Template ///////////////////////////
function SegmentTreeRORQ(A) {
  let n = A.length,
    h = Math.ceil(Math.log2(n)),
    len = 2 * 2 ** h,
    a = Array(len).fill(0)
  initializeFromArray()
  return { update, query, tree }
  function initializeFromArray() {
    for (let i = 0; i < n; i++) a[n + i] = A[i]
    for (let i = n - 1; i >= 1; i--) pushup(i)
  }
  function update(pos, v) {
    a[n + pos] = v
    for (let i = parent(n + pos); i >= 1; i = parent(i)) pushup(i)
  }
  function pushup(i) {
    a[i] = a[left(i)] | a[right(i)]
  }
  function query(l, r) {
    // [L, R)
    let or = 0
    if (l >= r) return 0
    l += n
    r += n
    for (; l < r; l = parent(l), r = parent(r)) {
      if (l & 1) or |= a[l++]
      if (r & 1) or |= a[--r]
    }
    return or
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
////////////////////////////////////////////////////////////////
