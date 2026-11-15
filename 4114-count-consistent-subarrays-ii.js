/**
 * @param {number[]} nums
 * @return {number}
 */
var countConsistent = function (nums) {
  const A = nums
  const n = A.length
  const l = new Array(n).fill(-1)
  let st = []

  for (let i = 0; i < n; i++) {
    const a = A[i]
    while (
      st.length > 0 &&
      (A[st[st.length - 1]] & a) === a &&
      a < A[st[st.length - 1]]
    ) {
      st.pop()
    }
    if (st.length > 0) {
      l[i] = st[st.length - 1]
    }
    st.push(i)
  }

  let res = 0
  st = []

  for (let i = n - 1; i >= 0; i--) {
    const a = A[i]
    while (st.length > 0 && (A[st[st.length - 1]] & a) === a) {
      st.pop()
    }
    const r = st.length > 0 ? st[st.length - 1] : n
    res += (i - l[i]) * (r - i)
    st.push(i)
  }

  return res
}
