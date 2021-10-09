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

// another

/**
 * @param {string} s
 * @return {number}
 */
const findTheLongestSubstring = function(s) {
  const n = s.length
  const ch2num = ch => {
    const idx = 'aeiou'.indexOf(ch)
    return idx === -1 ? 0 : (1 << idx)
  }
  let res = 0
  let mask = 0
  const hash = new Map([[0, 0]])
  for (let i = 1; i <= n; i++) {
    mask ^= ch2num(s[i - 1])
    const first = hash.has(mask) ? hash.get(mask) : i
    if (!hash.has(mask)) hash.set(mask, i)
    res = Math.max(res, i - first)
  }

  return res
};
