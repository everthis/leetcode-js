/**
 * @param {string} s
 * @return {number}
 */
const numWays = function(s) {
  const n = s.length
  const cnt = Array(n).fill(0)
  let num = 0
  for(let i = 0; i < n; i++) {
    if(s[i] === '1') num++
    cnt[i] = num
  }
  const mod = 1e9 + 7
  let i0 = -1, i1 = -1, i2 = -1, i3 = -1
  for(let i = 0; i < n; i++) {
    if(cnt[i] === num / 3) {
      if(i0 === -1) i0 = i1 = i
      else i1 = i
    } else if(cnt[i] === 2 * num / 3) {
      if(i2 === -1) i2 = i3 = i
      else i3 = i
    }
  }
  if(num === 0) return (n - 1) * (n - 2) / 2 % mod
  if(i0 === -1 || i1 === -1 || i2 === -1 || i3 === -1) return 0

  return (i1 - i0 + 1) * (i3 - i2 + 1) % mod
};
