/**
 * @param {string} s
 * @return {number}
 */
const longestRepeatingSubstring = function(s) {
  let left = 0;
  let right = s.length - 1;
  while(left < right) {
    let pivot = Math.floor((left + right + 1) / 2);
    if (hasRepeat(s, pivot)) {
      left = pivot;
    } else {
      right = pivot - 1;
    }
  }
  return left;
};

const hasRepeat = (s, l) => {
  const strings = new Set();
  for (let i = 0; i < s.length - l + 1; i++) {
    const sub = s.substr(i, l);
    if (strings.has(sub)) {
      return true;
    }
    strings.add(sub);
  }
  return false;
}

// another

/**
 * @param {string} s
 * @return {number}
 */
const longestRepeatingSubstring = function(s) {
    const n = s.length;
    // dp[i][j] means # of repeated chars for substrings ending at i and j
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    let res = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (s.charAt(i - 1) === s.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                res = Math.max(res, dp[i][j]);
            }
        }
    }
    return res;
};
