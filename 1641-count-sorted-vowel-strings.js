/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = function (n) {
  return (n + 4) * (n + 3) * (n + 2) * (n + 1) / 24
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = function (n) {
  let mem = [1, 1, 1, 1, 1];
  for (let i = 1; i < n; ++i) {
    const next = [0, 0, 0, 0, 0];
    let tmp = 0;
    for (let j = 4; j >= 0; --j) {
      tmp += mem[j];
      next[j] = tmp;
    }
    mem = next;
  }
  let sum = 0;
  for (let i of mem) {
    sum += i;
  }
  return sum;
};

// another

/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = function (n) {
  const dp = Array.from({ length: n + 1 }, () => Array(5))
  recur(n, 0)
  return dp[n][0]
  function recur(r, i) {
    if(r === 0) return 1
    if(i === 5) return 0
    if(dp[r][i] != null) return dp[r][i]
    let res = recur(r, i + 1)
    res += recur(r - 1, i)
    return dp[r][i] = res
  }
};
