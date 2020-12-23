/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function (s, k) {
  if (s == null || s.length === 0) return 0
  const chars = new Array(26).fill(0)
  const aCode = 'a'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) chars[s.charCodeAt(i) - aCode] += 1
  let flag = true
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] < k && chars[i] > 0) flag = false
  }
  if (flag === true) {
    return s.length
  }
  let result = 0
  let start = 0
  let cur = 0
  while (cur < s.length) {
    if (chars[s.charCodeAt(cur) - aCode] < k) {
      result = Math.max(result, longestSubstring(s.slice(start, cur), k))
      start = cur + 1
    }
    cur++
  }
  result = Math.max(result, longestSubstring(s.slice(start), k))
  return result
}
