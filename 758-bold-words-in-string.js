/**
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
const boldWords = function (words, S) {
  const arr = new Array(S.length).fill(false)
  for(let w of words) {
    for(let i = 0, len = S.length - w.length; i <= len; i++) {
      const tmp = S.slice(i)
      if(tmp && tmp.startsWith(w)) {
        for(let j = i; j < i + w.length; j++) {
          arr[j] = true
        }
      }
    }
  }
  let res = ''
  for(let i = 0, len = S.length; i < len; i++) {
    if(arr[i] && (i === 0 || !arr[i - 1])) {
      res += '<b>'
    }
    res += S[i]
    if(arr[i] && (i === len - 1 || !arr[i + 1])) {
      res += '</b>'
    }
  }
  return res
}
