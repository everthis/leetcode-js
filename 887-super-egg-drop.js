/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */

const superEggDrop = function(K, N) {
  let lo = 1,
    hi = N,
    mi
  while (lo < hi) {
    mi = ((lo + hi) / 2) >> 0
    if (f(mi, K, N) < N) lo = mi + 1
    else hi = mi
  }
  return lo
}

function f(x, K, N) {
  let ans = 0,
    r = 1,
    i = 1
  for (let i = 1; i <= K; ++i) {
    r = ((r * (x - i + 1)) / i) >> 0
    ans += r
    if (ans >= N) break
  }
  return ans
}

// another

const superEggDrop = function(K, N) {
  const dp = Array.from({ length: K + 1 }, () => new Array(N + 1).fill(0))
  return helper(K, N, dp)
}
function helper(K, N, memo) {
  if (N <= 1) {
    return N
  }
  if (K === 1) {
    return N
  }
  if (memo[K][N] > 0) {
    return memo[K][N]
  }

  let low = 1,
    high = N,
    result = N
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2)
    let left = helper(K - 1, mid - 1, memo)
    let right = helper(K, N - mid, memo)
    result = Math.min(result, Math.max(left, right) + 1)
    if (left === right) {
      break
    } else if (left < right) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  memo[K][N] = result
  return result
}
