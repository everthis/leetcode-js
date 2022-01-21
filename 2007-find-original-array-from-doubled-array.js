/**
 * @param {number[]} changed
 * @return {number[]}
 */
 const findOriginalArray = function(changed) {
  const n = changed.length, res = []
  if(n % 2 === 1 || n === 0) return res
  const hash = {}
  for(let e of changed) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  changed.sort((a, b) => a - b)

  for(let i = 0, len = n; i < len; i++) {
    const cur = changed[i], dVal = cur * 2
    if (cur === 0 && hash[cur] % 2 === 1) continue
    if(hash[dVal] && hash[cur]) {
      res.push(cur)
      hash[dVal]--
      hash[cur]--
    }
  }
  return res.length === n / 2 ? res : []
};
