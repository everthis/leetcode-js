/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
const maxScoreWords = function (words, letters, score) {
  const points = new Map()
  const count = Array(26).fill(0)
  for (let w of letters) {
    count[w.charCodeAt(0) - 97] = ~~count[w.charCodeAt(0) - 97] + 1
  }
  return dfs(count, 0)
  function dfs(count, index) {
    if (index >= words.length) {
      return 0
    }
    const x = dfs(count, index + 1)
    const copy = [...count]
    let point = 0
    let isValid = true
    for (let w of words[index]) {
      let k = w.charCodeAt(0) - 97
      copy[k]--
      point += score[k]
      if (copy[k] < 0) isValid = false
    }
    return Math.max(x, isValid ? point + dfs(copy, index + 1) : 0)
  }
}
