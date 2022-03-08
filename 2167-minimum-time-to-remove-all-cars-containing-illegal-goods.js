/**
 * @param {string} s
 * @return {number}
 */
const minimumTime = function(s) {
  const n = s.length
  const arr = []
  for(let ch of s) {
    arr.push(ch === '1' ? 1 : -1)
  }
  const score = minSum(arr)
  return n + score

  function minSum(ar) {
    const dp = Array(n).fill(Infinity)
    dp[0] = ar[0]
    let ans = dp[0]
    for(let i = 1; i < n; i++) {
      dp[i] = Math.min(ar[i], ar[i] + dp[i - 1])
      ans = Math.min(ans, dp[i])
    }
    return ans > 0 ? 0 : ans
  }
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const minimumTime = function(s) {
  const n = s.length
  const arr = []
  for(let ch of s) {
    arr.push(ch === '1' ? 1 : -1)
  }
  const score = minSum(arr)
  return n + score

  function minSum(ar) {
    const dp = Array(n).fill(0)
    dp[0] = ar[0]
    for(let i = 1; i < n; i++) {
      dp[i] = Math.min(ar[i], ar[i] + dp[i - 1])
    }
    return Math.min(0, Math.min(...dp))
  }
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const minimumTime = function(s) {
  if(s.length === 1) return s === '1' ? 1 : 0
  const n = s.length
  const arr = []
  for(let ch of s) {
    arr.push(ch === '1' ? 1 : -1)
  }
  const score = minSum(arr)
  return n + score

  function minSum(ar) {
    const dp = Array(n).fill(0)
    dp[0] = ar[0]
    let ans = dp[0]
    for(let i = 1; i < n; i++) {
      dp[i] = Math.min(ar[i], ar[i] + dp[i - 1])
      ans = Math.min(0, ans, dp[i])
    }
    return ans
  }
};

// another


/**
 * @param {string} s
 * @return {number}
 */
var minimumTime = function(s) {

  const { max, min } = Math
  
        let n = s.length;
    const l = Array.from({ length: n + 1 }, () => Array(2).fill(0))
  const r = Array.from({ length: n + 1 }, () => Array(2).fill(0))
        for (let i = 0; i < n; i++) l[i][0] = l[i][1] = r[i][0] = r[i][1] = 0;
        if (s[0] == '1') {
            l[0][0] = 1;
            l[0][1] = 2;
        }
        for (let i = 1; i < n; i++) {
            if (s[i] == '0') {
                l[i][0] = l[i - 1][0];
                l[i][1] = l[i - 1][1];
            } else {
                l[i][0] = i + 1;
                l[i][1] = min(l[i - 1][0], l[i - 1][1]) + 2;
            }
        }
        if (s[n - 1] == '1') {
            r[n - 1][0] = 1;
            r[n - 1][1] = 2;
        }
        for (let i = n - 2; i >= 0; i--) {
            if (s[i] == '0') {
                r[i][0] = r[i + 1][0];
                r[i][1] = r[i + 1][1];
            } else {
                r[i][0] = n - i;
                r[i][1] = min(r[i + 1][0], r[i + 1][1]) + 2;
            }
        }
        let ans = n;
        for (let i = -1; i < n; i++) {
            let cost = 0;
            if (i != -1) cost += min(l[i][0], l[i][1]);
            if (i != n - 1) cost += min(r[i + 1][0], r[i + 1][1]);
            ans = min(ans, cost);
        }
        return ans;
};
