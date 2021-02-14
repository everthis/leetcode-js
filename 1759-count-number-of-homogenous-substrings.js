/**
 * @param {string} s
 * @return {number}
 */
const countHomogenous = function(s) {
  const mod = 10 ** 9 + 7
  let pre = s[0], res = 0, curL = 1
  for(let i = 1, len = s.length; i < len; i++) {
    if(s[i] === pre) {
      curL++
    } else {
      res = (res + helper(curL)) % mod
      pre = s[i]
      curL = 1
    }
  }
  if(curL === 1) res = (res + 1) % mod
  else res = (res + helper(curL)) % mod
  return res

  function helper(num) {
     return (num * (num + 1)) / 2
  }
};

