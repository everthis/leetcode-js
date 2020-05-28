/**
 * @param {number} N
 * @return {number}
 */
const consecutiveNumbersSum = function (N) {
  let count = 1
  for (let k = 2; k < Math.sqrt(2 * N); k++) {
    if ((N - (k * (k - 1)) / 2) % k === 0) count++
  }
  return count
}
