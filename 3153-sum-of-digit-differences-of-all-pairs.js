/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function (nums) {
  const numDigits = nums[0].toString().length
  const n = nums.length
  let totalDiff = 0

  for (let pos = 0; pos < numDigits; ++pos) {
    const digitCount = new Array(10).fill(0)
    for (const num of nums) {
      const digit = parseInt(num.toString()[pos])
      digitCount[digit]++
    }
    for (let digit = 0; digit < 10; ++digit) {
      const pairsCount = digitCount[digit] * (n - digitCount[digit])
      totalDiff += pairsCount
    }
  }

  return Math.floor(totalDiff / 2)
}
