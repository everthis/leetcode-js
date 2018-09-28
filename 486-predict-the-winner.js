/**
 * @param {number[]} nums
 * @return {boolean}
 */
const PredictTheWinner = function(nums) {
  // The dp[i][j] saves how much more scores that the first-in-action player will get from i to j than the second player.
  const dp = [];
  for (let i = 0; i <= nums.length; i++) {
    dp.push(Array(nums.length).fill(0));
  }
  for (let s = nums.length - 1; s >= 0; s--) {
    dp[s][s] = nums[s];
    for (let e = s + 1; e < nums.length; e++) {
      let a = nums[s] - dp[s + 1][e];
      let b = nums[e] - dp[s][e - 1];
      dp[s][e] = Math.max(a, b);
    }
  }
  return dp[0][nums.length - 1] >= 0;
};

console.log(PredictTheWinner([1, 5, 233, 7]));
console.log(PredictTheWinner([3, 5, 3]));
