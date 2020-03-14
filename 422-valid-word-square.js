/**
 * @param {string[]} words
 * @return {boolean}
 */
const validWordSquare = function(words) {
  if (words == null || words.length === 0) return true
  const n = words.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (
        j >= n ||
        words[j].length <= i ||
        words[j].charAt(i) !== words[i].charAt(j)
      )
        return false
    }
  }
  return true
}
