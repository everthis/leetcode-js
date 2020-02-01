/**

We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I'll tell you whether the number I picked is higher or lower.
However, when you guess a particular number x, and you guess wrong, you pay $x.
You win the game when you guess the number I picked.

Example:

n = 10, I pick 8.

First round:  You guess 5, I tell you that it's higher. You pay $5.
Second round: You guess 7, I tell you that it's higher. You pay $7.
Third round:  You guess 9, I tell you that it's lower. You pay $9.

Game over. 8 is the number I picked.

You end up paying $5 + $7 + $9 = $21.
Given a particular n ≥ 1, find out how much money you need to have to guarantee a win.

*/

/**
 * @param {number} n
 * @return {number}
 */
const getMoneyAmount = function(n) {
  const dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(0))
  return helper(dp, 1, n)
};

function helper(dp, s, e) {
  if(s >= e) return 0
  if(dp[s][e] !== 0) return dp[s][e]
  let res = Number.MAX_VALUE
  for(let i = s; i <= e; i++) {
    const tmp = i + Math.max(helper(dp, s, i - 1), helper(dp, i + 1, e))
    res = Math.min(res, tmp)
  }
  dp[s][e] = res
  return res
}
