/**
 * @param {number[]} strength
 * @return {number}
 */
const totalStrength = function (strength) {
  const mod = BigInt(1e9 + 7)
  let res = 0n
  const n = strength.length
  strength = strength.map(e => BigInt(e))
  const leftsum = Array(n + 1).fill(0n),
    rightsum = Array(n + 1).fill(0n),
    leftmul = Array(n + 1).fill(0n),
    rightmul = Array(n + 1).fill(0n)
  const asc = []
  const big = BigInt

  for (let i = 0; i < n; i++) {
    leftsum[i + 1] = (leftsum[i] + strength[i]) % mod
    leftmul[i + 1] = (leftmul[i] + big(i + 1) * strength[i]) % mod
  }

  for (let i = n - 1; i >= 0; i--) {
    rightsum[i] = (rightsum[i + 1] + strength[i]) % mod
    rightmul[i] = (rightmul[i + 1] + big(n - i) * strength[i]) % mod
  }

  // j is the exclusive right index
  for (let j = 0; j <= n; j++) {
    while (
      asc.length &&
      (j === n || strength[asc[asc.length - 1]] >= strength[j])
    ) {
      const k = asc.pop()
      const i = asc.length === 0 ? 0 : asc[asc.length - 1] + 1
      const left =
        (mod +
          leftmul[k + 1] -
          leftmul[i] -
          ((big(i) * (leftsum[k + 1] - leftsum[i])) % mod)) %
        mod
      const right =
        (mod +
          rightmul[k + 1] -
          rightmul[j] -
          ((big(n - j) * (rightsum[k + 1] - rightsum[j])) % mod)) %
        mod
      const sum = (left * big(j - k) + right * big(k - i + 1)) % mod
      res = (res + sum * strength[k]) % mod
    }
    asc.push(j)
  }
  return res
}
