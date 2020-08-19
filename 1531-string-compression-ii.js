/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLengthOfOptimalCompression = function(s, k) {
  const m = new Map()
  function counter(start, last, lastCount, left) {
    if(left < 0) return Infinity
    if(start >= s.length) return 0
    let res
    const k = `${start}-${last}-${lastCount}-${left}`
    if(m.has(k)) return m.get(k)
    if(s[start] === last) {
      const incr = (lastCount === 1 || lastCount === 9 || lastCount === 99) ? 1 : 0
      res = incr + counter(start + 1, last, lastCount + 1, left)
    } else {
      const keepCounter = 1 + counter(start + 1, s[start], 1, left)
      const delCounter = counter(start + 1, last,  lastCount, left - 1)
      res = Math.min(keepCounter, delCounter)
    }
    m.set(k, res)
    return res
  }
  return counter(0, '', 0, k)
};

// another

const getLengthOfOptimalCompression = function (s, k) {
  const n = s.length
  const dp = new Array(n + 1).fill(n).map((row) => new Array(k + 1).fill(n))
  dp[0][0] = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      let letterCount = 0
      let deletion = 0
      // keep s[i], compress same letters, remove different letters
      for (let l = i; l >= 1; l--) {
        if (s.charAt(l - 1) === s.charAt(i - 1)) letterCount++
        else deletion++
        // places = length needed to rep compressed letters.
        // 0 places for count = 1,0, 1 place = <10, 10-99 requires 2 places, 100+ requires 3
        let places = 0
        if (letterCount >= 100) places = 3
        else if (letterCount >= 10) places = 2
        else if (letterCount >= 2) places = 1
        if (j - deletion >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[l - 1][j - deletion] + 1 + places)
        }
      }
      // delete
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1])
      }
    }
  }
  return dp[n][k]
}

