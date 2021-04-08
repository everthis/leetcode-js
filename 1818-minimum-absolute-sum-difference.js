/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minAbsoluteSumDiff = function (A, B) {
  const mod = 10 ** 9 + 7
  const sA = [...A].sort((a, b) => a - b)
  let res = 0
  let gain = 0

  for (let i = 0; i < A.length; i++) {
    const delta = Math.abs(A[i] - B[i])
    res += delta
    // if delta <= gain, delta - newDelta is not possbile to be better than gain
    if (delta <= gain) continue
    // Find closest to B[i] in A
    const idx = binaryS(sA, B[i])
    // Double check l, l + 1, l - 1
    const newDelta = Math.min(
      Math.abs(sA[idx] - B[i]),
      idx >= 1 ? Math.abs(sA[idx - 1] - B[i]) : Infinity,
      idx + 1 < A.length ? Math.abs(sA[idx + 1] - B[i]) : Infinity
    )
    gain = Math.max(gain, delta - newDelta)
  }
  return (res - gain) % mod
}
function binaryS(A, b) {
  let [l, r] = [0, A.length - 1]
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    const midV = A[mid]
    if (midV === b) return mid
    if (midV < b) l = mid + 1
    else r = mid - 1
  }
  return l
}
