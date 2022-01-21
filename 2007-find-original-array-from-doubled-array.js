/**
 * @param {number[]} changed
 * @return {number[]}
 */
 const findOriginalArray = function(changed) {
  const n = changed.length, res = [], { abs } = Math
  if(n % 2 === 1 || n === 0) return res
  const hash = {}
  for(let e of changed) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  const keys = Object.keys(hash)
  keys.sort((a, b) => abs(a) - abs(b))

  for(let k of keys) {
    if(hash[k] > (hash[k * 2] || 0)) return []
    for(let i = 0; i < hash[k]; i++) {
      res.push(k)
      hash[2 * k]--
    }
  }

  return res
};

// another

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
