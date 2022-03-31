/**
 * @param {number} n
 * @return {number}
 */
const houseOfCards = function(n) {
  const memo = Array.from({ length: n + 1 }, () => Array(n + 2).fill(null))
  return helper(n, n + 1)
  
  function helper(remain, preRow) {
    if(remain === 0 || remain === 2) return 1
    if(memo[remain][preRow] != null) return memo[remain][preRow]
    let res = 0
    for(let i = 5; i <= remain && i < preRow; i += 3) {
      res += helper(remain - i, i)
    }
    return memo[remain][preRow] = res
  }
};
