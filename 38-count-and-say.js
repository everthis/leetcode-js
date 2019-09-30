/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  let str = '1'
  for (let i = 2; i <= n; i++) {
    let tempStr = ''
    let count = 0
    for (let j = 0, m = str.length; j < m; j++) {
      const char = str.charAt(j)
      count += 1
      if (char !== str.charAt(j + 1)) {
        tempStr += count + char
        count = 0
      }
    }
    str = tempStr
  }
  return str
}
