/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var possiblyEquals = function (s1, s2) {
  let n = s1.length
  let m = s2.length
  const f = Array.from({ length: 41 }, () =>
    Array.from({ length: 41 }, () => Array(1001).fill(false))
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
