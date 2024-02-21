/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
  const n = word.length;
  let v = 0;
  let dp = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    while (v > 0 && word.charAt(i) != word.charAt(v)) {
      v = dp[v - 1];
    }
    v = dp[i] = v + (word.charAt(i) == word.charAt(v) ? 1 : 0);
  }
  while (v > 0 && (n - v) % k > 0) {
    v = dp[v - 1];
  }
  return Math.ceil((n - v) / k);  
};
