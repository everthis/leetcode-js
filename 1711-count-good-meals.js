/**
 * @param {number[]} deliciousness
 * @return {number}
 */
const countPairs = function (deliciousness) {
  const N = deliciousness.length
  deliciousness.sort((a, b) => a - b)
  const mp = {},
    mod = 10 ** 9 + 7
  let ret = 0
  for (let i = 0; i < N; i++) {
    if (deliciousness[i] !== 0) {
      let sum = 1 << (32 - __builtin_clz(deliciousness[i]) - 1)
      ret += mp[sum - deliciousness[i]] || 0
      ret += mp[(sum << 1) - deliciousness[i]] || 0
      if (ret >= mod) ret -= mod
    }
    if (mp[deliciousness[i]] == null) mp[deliciousness[i]] = 0
    mp[deliciousness[i]]++
  }
  return ret
}

function __builtin_clz(num) {
  if (num === 0) return 32
  return 32 - dec2bin(num).length
}

function dec2bin(num) {
  return (num >>> 0).toString(2)
}
