/**
 * @param {string} s
 * @return {string}
 */
const lastSubstring = function(s) {
  let ans = '',
    max = 'a'
  for (let i = 0; i < s.length; ) {
    let j = i,
      sub = s.slice(i)
    if (max < s[i] || ans < sub) {
      max = s[i]
      ans = sub
    }
    while (i < s.length && s[i + 1] === s[i]) {
      i++
    }
    if (j === i) {
      i++
    }
  }
  return ans
}
