/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s, V = 'aeiou', max = 0) {
  let encode = (c) => {
    let i = V.indexOf(c)
    return i == -1 ? 0 : 1 << i
  }
  let N = s.length
  let A = Array(N + 1).fill(0)
  let seen = new Map([[0, 0]])
  for (let i = 1; i <= N; ++i) {
    A[i] = A[i - 1] ^ encode(s[i - 1])
    let first = seen.has(A[i]) ? seen.get(A[i]) : i
    if (first == i) seen.set(A[i], i) // first seen A[i] index
    max = Math.max(max, i - first) // max of i-th index minus first seen A[i] index
  }
  return max
}
