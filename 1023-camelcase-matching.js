/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
const camelMatch = function(queries, pattern) {
    const res = []

    queries.forEach(el => {
      let tmp = chk(el, pattern)
      if(tmp) res.push(true)
      else res.push(false)
    })
    
    return res
};

function chk(str, p) {
  let pIdx = 0
  let sIdx = 0
  const sLen = str.length
  const pLen = p.length
  const Acode = ('A').charCodeAt(0)
  const Zcode = ('Z').charCodeAt(0)
  let pEnd = false

  for(let i = 0; i < pLen; i++) {
    let target = p.charAt(i)
    
    while(sIdx < sLen && !pEnd) {
      if(str.charCodeAt(sIdx) >= Acode && str.charCodeAt(sIdx) <= Zcode && str.charAt(sIdx) !== target) return false
      if(str.charAt(sIdx) === target) {
        if(i !== pLen - 1) {
          sIdx++
        } else {
          pEnd = true
        }
        break
      } else {
        sIdx++        
      }
    }
    if(sIdx >= sLen) return false
  }

  for(let i = sIdx + 1; pEnd && i < sLen; i++) {
    if(str.charCodeAt(i) >= Acode && str.charCodeAt(i) <= Zcode) return false
  }
  return true
}
