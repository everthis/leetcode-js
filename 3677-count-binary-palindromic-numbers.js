/**
 * @param {number} n
 * @return {number}
 */
var countBinaryPalindromes = function (n) {
  let dp = []
  let built = false
  n = BigInt(n)

  if (!built) {
    dp = new Array(56).fill(0)
    dp[1] = 1
    dp[2] = 1
    for (let i = 3; i <= 55; i++) dp[i] = 2 * dp[i - 2]
    built = true
  }

  let maxbit = bit(n)
  if (maxbit === -1) return 1
  let len = maxbit + 1

  let count = 1
  for (let i = 1; i < len; i++) count += dp[i]

  let half = Math.floor((len + 1) / 2)
  let start = 1n << BigInt(half - 1)
  let end = (1n << BigInt(half)) - 1n

  let lo = start,
    hi = end,
    best = start - 1n
  while (lo <= hi) {
    let mid = (lo + hi) >> 1n
    let pal = makePal(mid, len)
    if (pal <= n) {
      best = mid
      lo = mid + 1n
    } else {
      hi = mid - 1n
    }
  }

  if (best >= start) count += Number(best - start + 1n)
  return count

  function bit(num) {
    for (let i = 63; i >= 0; i--) {
      if ((num & (1n << BigInt(i))) !== 0n) return i
    }
    return -1
  }

  function makePal(p, len) {
    let pal = p
    let q = len % 2 === 0 ? p : p >> 1n
    while (q > 0n) {
      pal = (pal << 1n) | (q & 1n)
      q >>= 1n
    }
    return pal
  }
}
