/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseWords = function(s) {
  reverse(s, 0, s.length - 1)
  for (let i = 0, j = 0; i <= s.length; i++) {
    if (i == s.length || s[i] == ' ') {
      reverse(s, j, i - 1)
      j = i + 1
    }
  }
}
function reverse(s, begin, end) {
  while (begin < end) {
    let c = s[begin]
    s[begin] = s[end]
    s[end] = c
    begin++
    end--
  }
}
