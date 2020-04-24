/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
const areSentencesSimilar = function(words1, words2, pairs) {
  if(pairs == null || pairs.length === 0) {
    if(words1.length === words2.length) return true
    return false
  }
  const m = new Map()
  for(let p of pairs) {
    if(!m.has(p[0])) m.set(p[0], new Set())
    m.get(p[0]).add(p[1])
    if(!m.has(p[1])) m.set(p[1], new Set())
    m.get(p[1]).add(p[0])
  }
  for(let i = 0, len = Math.max(words1.length, words2.length); i < len; i++) {
    const c1 = words1[i]
    const c2 = words2[i]
    if( c1 === c2 ) continue
    if( !(m.has(c1) && m.get(c1).has(c2)) ) return false
  }
  return true
};
