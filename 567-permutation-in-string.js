/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
  if(s1.length > s2.length) return false
  const s1map = new Array(26).fill(0)
  const s2map = new Array(26).fill(0)
  const aCode = ('a').charCodeAt(0)
  const zCode = ('z').charCodeAt(0)
  
  for(let i = 0; i < s1.length; i++) {
    s1map[s1.charCodeAt(i) - aCode]++
    s2map[s2.charCodeAt(i) - aCode]++
  }
  
  for(let i = 0; i < s2.length - s1.length; i++) {
    if(matches(s1map, s2map)) return true
    s2map[s2.charCodeAt(i + s1.length) - aCode]++
    s2map[s2.charCodeAt(i) - aCode]--
  }
  
  return matches(s1map, s2map)
  
};

function matches(s1map, s2map) {
  for(let i = 0; i < 26; i++) {
    if(s1map[i] !== s2map[i]) return false
  }
  return true
}
