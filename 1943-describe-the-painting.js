/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
const splitPainting = function(segments) {
  const hash = {}
  for(let [s, e, c] of segments) {
    if(hash[s] == null) hash[s] = 0
    if(hash[e] == null) hash[e] = 0
    hash[s] += c
    hash[e] -= c
  }
  const keys = Object.keys(hash)
  keys.sort((a, b) => a - b)
  let prev, color = 0
  const res = []
  for(let k of keys) {
    if(prev != null && color !== 0) res.push([prev,k,color])

    prev = k
    color += hash[k]
  } 
  return res
};
