/**
 * @param {number[]} power
 * @return {number}
 */
const maximumTotalDamage = function(power) {
    const freq = new Map()
    for (const p of power) {
        freq.set(p, (freq.get(p) || 0) + 1)
    }
    const sorted = Array.from(freq.keys()).sort((a, b) => a - b)
    const n = sorted.length
    const dp = Array(n+1).fill(0)
    dp[1] = sorted[0] * freq.get(sorted[0])
    for(let i = 2; i <= n; i++) {
        const val = sorted[i-1]
        const cur = val * freq.get(val)
        let j = i - 2
        
        if(j >= 0 && sorted[j] + 1 === val) {
            j--
        }
        if(j >= 0 && sorted[j] + 2 === val) {
            j--
        }
        
        if(j >= 0) {
            dp[i] = Math.max(dp[i-1], dp[j+1] + cur)
        } else {
            dp[i] = Math.max(dp[i-1], cur)
        }
        
    }

    return dp[n]
};

// another

/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function (power) {
  power.sort((a, b) => a - b)
  const freqMap = new Map()
  for (const p of power) {
    freqMap.set(p, (freqMap.get(p) || 0) + 1)
  }
  const uniqueDamages = Array.from(freqMap.keys()).sort((a, b) => a - b)
  const n = uniqueDamages.length
  const dp = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    const damage = uniqueDamages[i]
    const totalDamage = damage * freqMap.get(damage)

    dp[i + 1] = Math.max(dp[i + 1], dp[i])

    let j = i - 1
    while (j >= 0 && uniqueDamages[j] >= damage - 2) {
      j--
    }
    dp[i + 1] = Math.max(dp[i + 1], (j >= 0 ? dp[j + 1] : 0) + totalDamage)
  }

  return dp[n]
}
