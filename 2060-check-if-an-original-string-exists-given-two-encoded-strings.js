function possiblyEquals(s1, s2) {
  const n = s1.length, m = s2.length;
  const dp = Array.from({ length: n + 1 }, v => Array.from({ length: m + 1}, w => new Set()));
  dp[0][0].add(0);

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      for (let delta of dp[i][j]) {
        // s1 is number
        let num = 0;
        if (delta <= 0) {
          for (let p = i; i < Math.min(i + 3, n); p++) {
              if (isDigit(s1[p])) {
                  num = num * 10 + Number(s1[p]);
                  dp[p + 1][j].add(delta + num);
              } else {
                  break;
              }
          }
        }

        // s2 is number
        num = 0;
        if (delta >= 0) {
            for (let q = j; q < Math.min(j + 3, m); q++) {
                if (isDigit(s2[q])) {
                    num = num * 10 + Number(s2[q]);
                    dp[i][q + 1].add(delta - num);
                } else {
                    break;
                }
            }
        }

        // match s1 non-digit character
        if (i < n && delta < 0 && !isDigit(s1[i])) {
            dp[i + 1][j].add(delta + 1);
        }

        // match s2 non-digit character
        if (j < m && delta > 0 && !isDigit(s2[j])) {
            dp[i][j + 1].add(delta - 1);
        }

        // two non-digit character match
        if (i < n && j < m && delta == 0 && s1[i] == s2[j]) {
            dp[i + 1][j + 1].add(0);
        }

      }
    }
  }
  return dp[n][m].has(0);
};

function isDigit(char) {
  return (/^\d{1}$/g).test(char);
}

// another

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const possiblyEquals = function(s1, s2) {
  const n = s1.length
  const m = s2.length
  const memo = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => Array(1001).fill(null))
  )
  memo[0][0][1000] = true
  
  return dfs(0, 0, 0)

  function dfs(i, j, diff) {
    if(memo[i][j][diff] != null) return memo[i][j][diff]
    let res = false
    if (i == n && j == m) res = diff === 0
    else if (i < n && isDigit(s1[i])) {
      let ii = i
      while (ii < n && isDigit( s1[ii] )) ii += 1
      for (let x of helper(s1.slice(i, ii))) {
        if (dfs(ii, j, diff-x)) res = true 
      }
    } else if (j < m && isDigit( s2[j] )) {
      let jj = j 
      while (jj < m && isDigit( s2[jj] )) jj += 1
      for (let y of helper(s2.slice(j, jj))) {
        if (dfs(i, jj, diff+y)) res = true 
      }
    } else if (diff == 0) {
      if (i < n && j < m && s1[i] == s2[j]) res = dfs(i+1, j+1, 0)
    }  else if (diff > 0) {
      if (i < n) res = dfs(i+1, j, diff-1)
    } else {
      if (j < m) res = dfs(i, j+1, diff+1)
    }

    memo[i][j][diff] = res
    return res
  }

  function isDigit(ch) {
    return ch >= '0' && ch <= '9'
  }

  function helper(str) {
    const ans = new Set()
    ans.add(+str)
    for(let i = 1, len = str.length; i < len; i++) {
      const pre = helper(str.slice(0, i))
      const post = helper(str.slice(i))
      for(let p of pre) {
        for(let n of post) {
          ans.add(p + n)
        }
      }
    }
    return Array.from(ans)
  }
};

// another

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var possiblyEquals = function (s1, s2) {
  let n = s1.length
  let m = s2.length
  const f = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => Array(1001).fill(false))
  )
  f[0][0][1000] = true

  for (let i = 0; i <= n; i++)
    for (let j = 0; j <= m; j++)
      for (let k = 0; k < 2000; k++) {
        if (!f[i][j][k]) continue
        // if k==1000 means length diff is 0, so check both next charactors.
        if (i + 1 <= n && j + 1 <= m && k == 1000 && s1[i] == s2[j]) {
          f[i + 1][j + 1][k] = true
        }
        // if first string is longer or same length, extend second string.
        if (k >= 1000 && j + 1 <= m) {
          if (s2[j] >= 'a' && s2[j] <= 'z') {
            // do not extend to be a longer string using a-z.
            if (k > 1000) {
              f[i][j + 1][k - 1] = true
            }
          } else if (s2[j] > '0') {
            let cur = 0
            for (let r = j; r < m; r++) {
              if (s2[r] >= '0' && s2[r] <= '9') {
                cur = cur * 10 + (s2[r] - '0')
                f[i][r + 1][k - cur] = true
              } else break
            }
          }
        }
        // if second string is longer or same length, extend first string.
        if (k <= 1000 && i + 1 <= n) {
          if (s1[i] >= 'a' && s1[i] <= 'z') {
            if (k < 1000) {
              f[i + 1][j][k + 1] = true
            }
          } else if (s1[i] > '0') {
            let cur = 0
            for (let r = i; r < n; r++) {
              if (s1[r] >= '0' && s1[r] <= '9') {
                cur = cur * 10 + (s1[r] - '0')
                f[r + 1][j][k + cur] = true
              } else break
            }
          }
        }
      }
  return f[n][m][1000]
}
