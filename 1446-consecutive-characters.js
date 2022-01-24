/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function(s) {
  let prev = '', prevIdx = -1, res = -Infinity
  for(let i = 0; i < s.length; i++) {
    const cur = s[i]
    if(cur !== prev) {
      res = Math.max(res, i - prevIdx)
      prev = cur
      prevIdx = i
    } else {
      if(i === s.length - 1) res = Math.max(res, i - prevIdx + 1)
    }
  }
  return res
};
