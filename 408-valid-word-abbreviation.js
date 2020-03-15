/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
const validWordAbbreviation = (word, abbr) => {
  if (word == null || abbr == null) return false
  let i = 0
  let j = 0
  const len = word.length
  const aLen = abbr.length
  while (i < len && j < aLen) {
    if (isNum(abbr[j])) {
      if (abbr[j] === '0') return false
      let n = 0
      while (j < aLen && isNum(abbr[j])) {
        n = n * 10 + Number(abbr[j])
        j++
      }
      i += n
    } else {
      if (word[i] !== abbr[j]) return false
      i++
      j++
    }
  }
  return i === word.length && j === aLen
}
const isNum = c => !isNaN(c)
