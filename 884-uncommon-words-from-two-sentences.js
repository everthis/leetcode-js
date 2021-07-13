/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = function(s1, s2) {
  const hash = {}
  const a1 = s1.split(' '), a2 = s2.split(' ')
  for(let e of a1) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  const res = []
  for(let e of a2) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  Object.keys(hash).forEach(k => {
    if(hash[k] === 1) res.push(k)
  })
  
  return res
};
