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
 
