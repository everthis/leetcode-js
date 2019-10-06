/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = function(s1, s2) {
  if (s1 === s2) return true
  const letters = new Array(128).fill(0)
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < s1.length; i++) {
    letters[s1.charCodeAt(i) - a]++
    letters[s2.charCodeAt(i) - a]--
  }
  for (let i = 0; i < 128; i++) if (letters[i] !== 0) return false
  for (let i = 1; i < s1.length; i++) {
    if (
      isScramble(s1.substring(0, i), s2.substring(0, i)) &&
      isScramble(s1.substring(i), s2.substring(i))
    )
      return true
    if (
      isScramble(s1.substring(0, i), s2.substring(s2.length - i)) &&
      isScramble(s1.substring(i), s2.substring(0, s2.length - i))
    )
      return true
  }
  return false
}
