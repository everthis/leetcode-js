/**
 * @param {number} n
 * @return {number}
 */
var countBinaryPalindromes = function (n) {
  n = BigInt(n)
  if (n === 0n) return 1
  const maxLen = Math.floor(Math.log2(Number(n))) + 1

  let ret = 1n
  for (let L = 1; L < maxLen; L++) {
    const h = Math.floor((L + 1) / 2)
    const mn = 1n << BigInt(h - 1)
    const mx = (1n << BigInt(h)) - 1n
    ret += mx - mn + 1n
  }

  {
    const L = maxLen
    const h = Math.floor((L + 1) / 2)
    const mn = 1n << BigInt(h - 1)
    const mx = (1n << BigInt(h)) - 1n
    let lo = mn,
      hi = mx
    while (lo < hi) {
      const mid = hi - (hi - lo) / 2n
      const pal = build(mid, L)
      if (pal <= n) {
        lo = mid
      } else {
        hi = mid - 1n
      }
    }
    const pal = build(hi, L)
    if (pal <= n) ret += hi - mn + 1n
  }

  return Number(ret)
}
function reverseBits(x) {
  let r = 0n
  while (x > 0n) {
    r = r * 2n + (x & 1n)
    x >>= 1n
  }
  return r
}

function build(half, L) {
  const h = Math.floor((L + 1) / 2)
  const k = L - h
  if (L % 2 === 0) {
    return (half << BigInt(k)) | reverseBits(half)
  } else {
    return (half << BigInt(k)) | reverseBits(half >> 1n)
  }
}


// another


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
