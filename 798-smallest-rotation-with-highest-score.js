/**
 * @param {number[]} A
 * @return {number}
 */
const bestRotation = function(A) {
  const N = A.length
  const bad = new Array(N).fill(0)
  for (let i = 0; i < N; ++i) {
    let left = (i - A[i] + 1 + N) % N
    let right = (i + 1) % N
    bad[left]--
    bad[right]++
    if (left > right) bad[0]--
  }

  let best = -N
  let ans = 0,
    cur = 0
  for (let i = 0; i < N; ++i) {
    cur += bad[i]
    if (cur > best) {
      best = cur
      ans = i
    }
  }
  return ans
}
