/**
 * @param {string} s
 * @return {number}
 */
var sumScores = function(s) {
  let res = 0
  const pre = lps(s)
  const cnt = []
  for(let i = 0; i < s.length; i++) {
    const j = pre[i]
    cnt.push(j === 0 ? 0 : cnt[j - 1] + 1)
  }
  res = cnt.reduce((ac, e) => ac + e, 0) + s.length
  return res

  function lps(s) {
    const n = s.length
    const res = Array(n).fill(0)

    for(let i = 1, j = 0; i < n; i++) {
        while(j && s[j] !== s[i]) {
            j = Math.max(0, res[j - 1])
        }
        j += (s[i] === s[j] ? 1 : 0)
        res[i] = j
    }

    return res
  }
};

// another

/**
 * @param {string} s
 * @return {number}
 */
var sumScores = function(s) {
  function z_function(s) {
      let n = s.length
      let z = Array(n).fill(0)
      let l = 0, r = 0
      for (let i = 1; i < n; i++) {
          if (i <= r) z[i] = Math.min(r - i + 1, z[i - l])
          while (i + z[i] < n && s[z[i]] == s[i + z[i]]) {
              z[i] += 1                  
          }

          if (i + z[i] - 1 > r) {
              l = i
              r = i + z[i] - 1                  
          }

      }
      return z          
  }

  const sum = z_function(s).reduce((ac, e) => ac + e, 0)
  return sum + s.length  
};
 
