/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
const productQueries = function(n, queries) {
  const mod = 1e9 + 7
  const powers = []
  let pow = 1
  while(n) {
    const tmp = (n & 1) * pow
    if(tmp) powers.push(tmp)
    n = n >> 1
    pow *= 2
  }

  // console.log(powers)
  const res = []
  
  for(const [s, e] of queries) {
     let tmp = 1
     for(let i = s; i <= e; i++) {
         tmp = (tmp * powers[i]) % mod
     }
     res.push(tmp)
  }
  
  return res
};
