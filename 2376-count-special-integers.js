/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function(n) {
  const L = [];
  for (let x = n + 1; x > 0; x = Math.floor(x / 10)) L.unshift(x % 10);

  // Count the number with digits < N
  let res = 0,
    limit = L.length;
  for (let i = 1; i < limit; ++i) res += 9 * A(9, i - 1);

  const seen = new Set();
  for (let i = 0; i < limit; ++i) {
    for (let j = i > 0 ? 0 : 1; j < L[i]; ++j)
      if (!seen.has(j)) res += A(9 - i, limit - i - 1);
    if (seen.has(L[i])) break;
    seen.add(L[i]);
  }
  return res;  
};


function A(m, n) {
  return n === 0 ? 1 : A(m, n - 1) * (m - n + 1);
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const countSpecialNumbers = function (n) {
  const s = '' + n
  const dp = Array.from({ length: 11 }, () =>
    Array.from({ length: 2 }, () => Array(1024).fill(-1))
  )

  return helper(0, 1, 0, s)
  function helper(idx, tight = 1, mask = 0, digits) {
    if (idx == digits.length) return mask !== 0 ? 1 : 0

    if (dp[idx][tight][mask] != -1) return dp[idx][tight][mask]

    let k = tight ? +digits[idx] : 9
    let ans = 0

    for (let i = 0; i <= k; i++) {
      if (mask & (1 << i)) continue
      let newMask = mask == 0 && i == 0 ? mask : mask | (1 << i)

      let nextTight = tight && i == digits[idx] ? 1 : 0
      ans += helper(idx + 1, nextTight, newMask, digits)
    }

    return (dp[idx][tight][mask] = ans)
  }
}
