/**
 * @param {string[]} words
 * @return {number}
 */
var countPairs = function(words) {
    const mp = {}
  let res = 0
  const n = words.length
  const a = 'a'.charCodeAt(0)
  for(let i = 0; i < n; i++) {
    const e  = words[i]
    let str = ''
    let code = e.charCodeAt(0) - a

    for(let j = 0; j < e.length; j++) {
      str += String.fromCharCode(((e.charCodeAt(j) - a - code + 26) % 26) + a)
    }
    if(mp[str] == null) mp[str] = 0
    res += mp[str]
    mp[str]++
  }
  

  return res
};
