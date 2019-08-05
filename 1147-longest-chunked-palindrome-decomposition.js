/**
 * @param {string} text
 * @return {number}
 */
const longestDecomposition = function(text) {
  let res = 0,
    n = text.length
  let l = '',
    r = ''
  for (let i = 0; i < n; ++i) {
    l = l + text.charAt(i)
    r = text.charAt(n - i - 1) + r
    if (l === r) {
      ++res
      l = ''
      r = ''
    }
  }
  return res
}
