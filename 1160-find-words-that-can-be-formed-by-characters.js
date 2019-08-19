/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function(words, chars) {
  const cnt = Array(26)
  cnt.fill(0)
  for (let c of chars) cnt[c.charCodeAt() - 97]++

  let res = 0
  for (let word of words) {
    let tmp = cnt.slice()
    let match = true
    for (let c of word) {
      if (--tmp[c.charCodeAt() - 97] < 0) {
        match = false
        break
      }
    }
    if (match) res += word.length
  }
  return res
}
