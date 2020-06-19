/**
 * @param {string} S
 * @return {string}
 */
const longestDupSubstring = function(S) {
  const R = 26,
    MOD = 1e9 + 7
  let lo = 0,
    hi = S.length - 1,
    res = ''
  while (lo < hi) {
    const len = Math.ceil((lo + hi) / 2)
    const sub = rabinKarp(S, len)
    if (sub !== '') {
      lo = len
      res = sub
    } else {
      hi = len - 1
    }
  }
  return res

  function rabinKarp(str, len) {
    const aCode = ('a').charCodeAt(0)
    let RM = 1
    // 等价于RM=Math.pow(R,M-1) % MOD
    // 由于JS精度问题拆解计算
    for (let i = 1; i < len; i++) {
      RM = (RM * R) % MOD
    }
    const map = new Map()
    let num = 0
    // 计算前len个字符串的散列值
    for (let i = 0; i < len; i++) {
      const code = str.charCodeAt(i) - aCode
      num = (num * R + code) % MOD
    }
    map.set(num, 0)
    // 后续计算散列值
    for (let i = 0; i < str.length - len; i++) {
      const preCode = str.charCodeAt(i) - aCode,
        curCode = str.charCodeAt(i + len) - aCode
      num = (num + MOD - ((preCode * RM) % MOD)) % MOD
      num = (num * R + curCode) % MOD
      if (map.has(num)) {
        const sub = str.substring(i + 1, i + 1 + len)
        const preId = map.get(num),
          preSub = str.substring(preId, preId + len)
        if (sub === preSub) return sub
      }
      map.set(num, i + 1)
    }
    return ''
  }
}
