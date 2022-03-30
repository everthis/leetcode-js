/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let dp = Array(k + 1).fill(0);
    for (let i = 0; i < piles.length; i++) {
      const next = Array(k + 1).fill(0);
      for (let l = 1; l <= k; l++) {
        let sum = 0;
        next[l] = dp[l];
        for (let j = 0; j < Math.min(piles[i].length, l); j++) {
          sum += piles[i][j];
          next[l] = Math.max(next[l], dp[l - j - 1] + sum);
        }
      }
      dp = next;
    }
    return dp[k];    
};

// another

/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
const maxValueOfCoins = function(piles, k) {
  const n = piles.length
  const memo = Array.from({ length: n + 1 }, () => Array(k + 1).fill(null))
  return helper(0, k)

  // TC: O(k * m)
  // k: k
  // n: length of piles
  // m: sum(piles[i]), total elements of all piles
  function helper(i, k) {
    if(k == 0 || i === n) return 0
    if(memo[i][k] != null) return memo[i][k]
    let res = helper(i + 1, k)
    let cur = 0

    for(let j = 0; j < Math.min(piles[i].length, k); j++) {
      cur += piles[i][j]
      res = Math.max(res, cur + helper(i + 1, k - j - 1))
    }
    return memo[i][k] = res
  }
};
