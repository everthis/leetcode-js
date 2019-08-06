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

// another

/**
 * @param {string} text
 * @return {number}
 */
const longestDecomposition = function(text) {
  let n = text.length
  for (let i = 0; i < Math.floor(n / 2); i++)
    if (text.slice(0, i + 1) === text.slice(n - 1 - i, n))
      return 2 + longestDecomposition(text.slice(i + 1, n - 1 - i))
  return n === 0 ? 0 : 1
}
