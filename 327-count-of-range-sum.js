/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countRangeSum = function (nums, lower, upper) {
  if (nums.length === 0) return 0
  const sums = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i - 1] + nums[i]
  }
  function merge_sort(A, lo, hi) {
    if (hi - lo === 1) {
      return sums[lo] >= lower && sums[lo] <= upper ? 1 : 0
    }
    const mid = lo + Math.floor((hi - lo) / 2)
    let counter = merge_sort(A, lo, mid) + merge_sort(A, mid, hi)
    let m = mid,
      n = mid
    for (let i = lo; i < mid; i++) {
      while (m !== hi && sums[m] - sums[i] < lower) {
        m++
      }
      while (n !== hi && sums[n] - sums[i] <= upper) {
        n++
      }
      counter += n - m
    }
    const M = A.slice(lo, mid)
    const N = A.slice(mid, hi)
    M.push(Number.MAX_SAFE_INTEGER)
    N.push(Number.MAX_SAFE_INTEGER)
    for (let k = lo, i = 0, j = 0; k < hi; k++) {
      A[k] = M[i] < N[j] ? M[i++] : N[j++]
    }
    return counter
  }
  return merge_sort(sums, 0, nums.length)
}
