/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function(s, t) {
  const as = Array(26).fill(0), ts = Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for(const e of s){
    as[e.charCodeAt(0) - a]++
  }
  for(const e of t){
    ts[e.charCodeAt(0) - a]++
  }
  
  let com = 0
  for(let i = 0; i < 26; i++) {
    com += Math.min(as[i], ts[i])
  }
  return t.length - com
};
