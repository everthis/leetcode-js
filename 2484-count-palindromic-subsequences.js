const initialize2DArray = (n, m) => {
  let d = []
  for (let i = 0; i < n; i++) {
    let t = Array(m).fill(0)
    d.push(t)
  }
  return d
}

const mod = 1e9 + 7
/**
 * @param {string} s
 * @return {number}
 */
const countPalindromes = (s) => {
  let res = 0,
    n = s.length,
    cnt = Array(10).fill(0)
  for (let i = 0; i < n; i++) {
    let tot = 0
    for (let j = n - 1; j > i; j--) {
      if (s[i] == s[j]) {
        res += tot * (j - i - 1)
        res %= mod
      }
      tot += cnt[s[j] - "0"]
    }
    cnt[s[i] - "0"]++
  }
  return res
}
