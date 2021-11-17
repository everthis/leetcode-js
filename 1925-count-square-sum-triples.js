/**
 * @param {number} n
 * @return {number}
 */
const countTriples = function(n) {
  let res = 0
  const hash = {}
  for(let i = 1; i<= n; i++) {
    hash[i * i] = 1
  }
  
  for(let i = 1; i <= n; i++) {
    for(let j = i; i * i + j * j <= n * n; j++)  {
      res += (hash[i * i + j * j] || 0) * 2
    }
  }

  return res
};
