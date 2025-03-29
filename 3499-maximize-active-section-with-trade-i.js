/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function (s) {
  const n = s.length
  const c1 = Array.from(s).filter((char) => char === '1').length

  let ans = 0
  let i = 0
  while (i < n) {
    if (s[i] === '1') {
      const start = i
      while (i < n && s[i] === '1') {
        i++
      }
      const end = i - 1
      if (start > 0 && end < n - 1) {
        let leftZeros = 0
        let j = start - 1
        while (j >= 0 && s[j] === '0') {
          leftZeros++
          j--
        }
        let rightZeros = 0
        j = end + 1
        while (j < n && s[j] === '0') {
          rightZeros++
          j++
        }
        const more = leftZeros + rightZeros
        ans = Math.max(ans, more)
      }
    } else {
      i++
    }
  }
  return c1 + ans
}
