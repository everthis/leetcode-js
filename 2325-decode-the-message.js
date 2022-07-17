/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  const set =  new Set()
  for(const ch of key) {
    if(ch !== ' ') set.add(ch)
    if(set.size === 26) break
  }
  const arr = Array.from(set).map((e, i) => [e, i])
  const hash = {}
  for(const [e, i] of arr) {
    hash[e] = i
  }
  // console.log(arr)
  const a = 'a'.charCodeAt(0)
  let res = ''
  for(const ch of message) {
    if(ch === ' ') {
      res += ' '
      continue
    }
    const idx = hash[ch]
    const tmp = String.fromCharCode(a + idx)
    res += tmp
  }
  
  return res
};
