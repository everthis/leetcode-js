/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfFlooredPairs = function (nums) {
  const MAX = Math.max(...nums)
  const countsGreaterOrEqualTo = new Array(MAX + 1).fill(0)
  const numCounts = new Map()
  const MOD = 1e9 + 7
  nums.forEach((num) => {
    countsGreaterOrEqualTo[num]++
    numCounts.set(num, (numCounts.get(num) || 0) + 1)
  })

  for (let num = MAX - 1; num >= 0; num--) {
    countsGreaterOrEqualTo[num] += countsGreaterOrEqualTo[num + 1]
  }
  
  let totalCount = 0
  numCounts.forEach((count, num) => {
    let current = num
    while (current <= MAX) {
      totalCount = (totalCount + countsGreaterOrEqualTo[current] * count) % MOD
      current += num
    }
  })

  return totalCount
}
