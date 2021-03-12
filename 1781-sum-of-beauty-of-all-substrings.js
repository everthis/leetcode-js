/**
 * @param {string} s
 * @return {number}
 */
const beautySum = function(s) {
  let ans = 0
  const a = 'a'.charCodeAt(0)
  const min = arr => {
    let res = Infinity
    for(let e of arr) {
      if(e !== 0) res = Math.min(e, res)
    }
    return res
  }
  for(let i = 0, n = s.length; i < n; i++) {
    let freq = Array(26).fill(0)
    for(let j = i; j < n; j++) {
      freq[s.charCodeAt(j) - a]++
      ans += Math.max(...freq) - min(freq)
    }
  }
  return ans 
};
