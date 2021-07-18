/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
const canBeTypedWords = function(text, brokenLetters) {
  const set = new Set(brokenLetters.split(''))
  const arr = text.split(' ')
  let res = 0
  for(let e of arr) {
    let ok = true
    for(let c of e) {
      if(set.has(c)) {
        ok = false
        break
      }
    }
    if(ok) res++
  }
  
  return res
};
