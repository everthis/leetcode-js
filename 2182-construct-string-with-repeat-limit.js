/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    const a = 'a'.charCodeAt(0)
    const ch = Array(26).fill(0)
    for(let e of s) {
      const idx = e.charCodeAt(0)
      ch[idx - a]++
    }
    let res = '', last = ''
    while(true) {
      let len = res.length
      let h = false
      for(let i = 25; i >= 0; i--) {
        if(ch[i] >= repeatLimit && res[res.length - 1] !== String.fromCharCode(a + i)) {

          res += String.fromCharCode(a + i).repeat(repeatLimit)
          ch[i] -= repeatLimit
          
          if(ch[i]) {
            for(let j = i - 1; j >= 0; j--) {
              if(ch[j]) {
                res += String.fromCharCode(a + j)
                ch[j]--
                break
              }
            }
            break
          }

        }else if(ch[i] > 0 && res[res.length - 1] !== String.fromCharCode(a + i)) {
          
          res += String.fromCharCode(a + i).repeat(ch[i])
          ch[i] = 0
          break
        }
      }
      if(len === res.length) break
    }
    
    
    return res
};
