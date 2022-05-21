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

// another

/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
const splitPainting = function(segments) {
  const sum = {}
  for(const [s, e, v] of segments) {
    if(sum[s] == null) sum[s] = 0
    if(sum[e] == null) sum[e] = 0
    sum[s] += v
    sum[e] -= v
  }
  const keys = Object.keys(sum).map(e => +e)
  keys.sort((a, b) => a - b)
  const res = []
  let pre = 0, s = 0, n = keys.length
  for(let i = 0; i < n; i++) {
    const k = keys[i]
    
    if(s) {
      res.push([pre, k, s])
    }
    s += sum[k]
    pre = k
  }
  
  return res
};
