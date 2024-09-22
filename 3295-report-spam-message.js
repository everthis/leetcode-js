/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
  let res = false
  const m = message.length, n = bannedWords.length
  let cnt = 0
  const bs = new Set(bannedWords)
  for(let i = 0; i < m; i++) {
    const str = message[i]
    /*
    for(let j = 0; j < n; j++) {
      const e = bannedWords[j]
      if(str === e) {
        cnt++
        break
      }
    }
    */
    if(bs.has(str)) cnt++
    if(cnt >= 2) return true
  }
  
  return res
};
