/**
 * @param {number[][]} queries
 * @return {number[]}
 */
var waysToFillArray = function (queries) {
  const nax = 10123
  const C = Array.from({ length: nax }, () => Array(15).fill(0n))
  const mod = BigInt(10 ** 9 + 7)
  if (C[1][1] == 0n) {
    for (let i = 0; i < nax; ++i) {
      C[i][0] = 1n
      if (i < 15) {
        C[i][i] = 1n
      }
      for (let j = 1; j < i && j < 15; ++j) {
        C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % mod
      }
    }
  }
  const answer = []
  for (let query of queries) {
    let n = query[0]
    let k = query[1]
    let total = 1n
    const consider = (cnt) => {
      total = (total * C[n + cnt - 1][cnt]) % mod
    }
    for (let i = 2; i * i <= k; ++i) {
      if (k % i == 0) {
        let cnt = 0
        while (k % i == 0) {
          k = (k / i) >> 0
          cnt++
        }
        consider(cnt)
      }
    }
    if (k != 1) {
      consider(1)
    }
    answer.push(total)
  }
  return answer
}
