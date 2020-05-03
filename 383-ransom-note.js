/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const m = new Map()
  for(let c of magazine) {
    m.set(c, (m.get(c) || 0) + 1 )
  }
  for(let c of ransomNote) {
    if(!m.has(c) || m.get(c) <= 0) return false
    m.set(c, m.get(c) - 1)
  }
  return true
};
