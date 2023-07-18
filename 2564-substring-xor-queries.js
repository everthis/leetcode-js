/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
const substringXorQueries = function(s, queries) {
  const n = s.length, q = queries.length
  const res = []
  const map = {}, { max, min } = Math, int = parseInt, big = BigInt
  
  for(let i = 0; i < n; i++) {
    if(s[i] === '0') {
      if(map[0] == null) map[0] = [i, i]
      continue
    }
    let num = 0n
    for(let j = i; j <= min(i + 32, n - 1); j++) {
      num = (num << 1n) + big(int(s[j]))
      if(map[num] == null) map[num] = [i, j]
    }
  }
  for(let i = 0; i < q; i++) {
    const [fir, sec] = queries[i]
    const num = fir ^ sec
    if(map[num] != null) res.push([...map[num]])
    else res.push([-1, -1])
  }
  
  return res
};
