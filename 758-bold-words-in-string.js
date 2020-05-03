/**
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
const boldWords = function (words, S) {
  const boldMap = new Array(S.length).fill(0)
  for (let i = 0; i < words.length; i++) {
    let match = -1
    while ((match = S.indexOf(words[i], match + 1)) > -1) {
      for (let j = match; j < match + words[i].length; j++) {
        boldMap[j] = 1
      }
    }
  }
  let res = ''
  let openTag = false
  for (let i = 0; i < S.length; i++) {
    if (boldMap[i] && !openTag) {
      res += `<b>`
      openTag = true
    } else if (!boldMap[i] && openTag) {
      res += `</b>`
      openTag = false
    }
    res += S[i]
  }
  res += openTag ? `</b>` : ``
  return res
}
