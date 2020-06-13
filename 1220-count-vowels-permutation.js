/**
 * @param {number} n
 * @return {number}
 */
const countVowelPermutation = function (n) {
  const mod = 1e9 + 7
  const arr = [
    [0, 1, 1], // a -> e
    [0, 1, 2], // e -> a, i
    [0, 1, 4], // i -> a, e, o, u
    [0, 1, 2], // o -> i, u
    [0, 1, 1], // u -> a
  ]
  for (let i = 3; i <= n; i++) {
    arr[0][i % 3] = arr[1][(i - 1) % 3] % mod
    arr[1][i % 3] = (arr[0][(i - 1) % 3] + arr[2][(i - 1) % 3]) % mod
    arr[2][i % 3] =
      (arr[0][(i - 1) % 3] +
        arr[1][(i - 1) % 3] +
        arr[3][(i - 1) % 3] +
        arr[4][(i - 1) % 3]) %
      mod
    arr[3][i % 3] = (arr[2][(i - 1) % 3] + arr[4][(i - 1) % 3]) % mod
    arr[4][i % 3] = arr[0][(i - 1) % 3] % mod
  }
  return arr.reduce((sum, subArr) => sum + subArr[n % 3], 0) % mod
}
