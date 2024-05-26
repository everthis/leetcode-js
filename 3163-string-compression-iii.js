/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let res = ''
  let c = word[0]
  let cnt = 0
  for (let i = 0; i < word.length; i++) {
    if (c === word[i]) {
      cnt++
      if (cnt === 9) {
        res += `${cnt}${c}`
        cnt = 0
      }
    } else {
      if (cnt !== 0) {
        res += `${cnt}${c}`
      }
      c = word[i]
      cnt = 1
    }
  }
  if (cnt !== 0) {
    res += `${cnt}${c}`
  }
  return res
};
