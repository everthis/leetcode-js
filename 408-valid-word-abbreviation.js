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

// another

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
const validWordAbbreviation = (word, abbr) => {
  let i = 0,
    j = 0
  while (i < word.length && j < abbr.length) {
    if (word.charAt(i) === abbr.charAt(j)) {
      ++i
      ++j
      continue
    }
    if (abbr.charAt(j) <= '0' || abbr.charAt(j) > '9') {
      return false
    }
    let start = j
    while (j < abbr.length && abbr.charAt(j) >= '0' && abbr.charAt(j) <= '9') {
      ++j
    }
    let num = +abbr.slice(start, j)
    i += num
  }
  return i == word.length && j == abbr.length
}
