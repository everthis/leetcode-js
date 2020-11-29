/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
  let max = -Infinity
  const m = accounts.length, n = accounts[0].length
  for(let i = 0; i < m; i++) {
    let tmp = 0
    for(let j = 0; j < n; j++) {
      tmp += accounts[i][j]
    }
    max = Math.max(max, tmp)
  }
  return max
};
