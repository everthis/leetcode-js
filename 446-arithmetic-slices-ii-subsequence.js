/**
 * @param {number[]} A
 * @return {number}
 */
const numberOfArithmeticSlices = function(A) {
  if (!A || A.length < 3) return 0;
  let res = 0;
  const dp = Array(A.length);
  for (let i = 0; i < A.length; i++) {
    dp[i] = new Map();
    for (let j = 0; j < i; j++) {
      const diff = A[i] - A[j];
      const prevCount = dp[j].get(diff) || 0;
      res += prevCount;
      const currCount = (dp[i].get(diff) || 0) + 1;
      dp[i].set(diff, prevCount + currCount);
    }
  }
  return res;
};
