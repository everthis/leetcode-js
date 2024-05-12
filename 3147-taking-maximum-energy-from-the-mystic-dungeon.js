/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
  const n = energy.length
  const sum = new Array(n).fill(0)
  const arr = new Array(k).fill(0)

  let max = -Infinity

  for (let i = 0; i < n; i++) {
    arr[i % k] += energy[i]
  }

  for (let i = 0; i < k; i++) {
    sum[i] = arr[i]
    max = Math.max(sum[i], max)
  }

  for (let i = k; i < n; i++) {
    sum[i] = sum[i - k] - energy[i - k]
    max = Math.max(sum[i], max)
  }

  return max
}
