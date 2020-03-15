/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
const minAbbreviation = function(target, dictionary) {
  let n = target.length,
    bn = 1 << n,
    cand = 0,
    minlen = Number.MAX_VALUE
  let minab = 0
  const dict = []
  let res = ''

  for (let w of dictionary) {
    let word = 0
    if (w.length != n) continue
    for (let i = n - 1, bit = 1; i >= 0; --i, bit <<= 1)
      if (target[i] != w[i]) word += bit
    dict.push(word)
    cand |= word
  }
  dfs(1, 0)

  for (let i = n - 1, pre = i; i >= 0; --i, minab >>= 1) {
    if (minab & 1) {
      if (pre - i > 0) res = pre - i + res
      pre = i - 1
      res = target[i] + res
    } else if (i == 0) res = pre - i + 1 + res
  }
  return res
  
  function abbrLen(mask) {
    let count = n
    for (let b = 3; b < bn; b <<= 1) if ((mask & b) == 0) count--
    return count
  }

  function dfs(bit, mask) {
    const len = abbrLen(mask)
    if (len >= minlen) return
    let match = true
    for (let d of dict) {
      if ((mask & d) == 0) {
        match = false
        break
      }
    }
    if (match) {
      minlen = len
      minab = mask
    } else
      for (let b = bit; b < bn; b <<= 1) if (cand & b) dfs(b << 1, mask + b)
  }
}
