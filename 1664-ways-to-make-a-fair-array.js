/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToMakeFair = function (nums) {
  const n = nums.length
  const preOddSum = new Array(n + 1).fill(0)
  const preEvenSum = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      preEvenSum[i + 1] = nums[i] + preEvenSum[i]
      preOddSum[i + 1] = preOddSum[i]
    } else {
      preOddSum[i + 1] = nums[i] + preOddSum[i]
      preEvenSum[i + 1] = preEvenSum[i]
    }
  }
  let ret = 0
  for (let i = 0; i < n; i++) {
    if (
      preEvenSum[i] + preOddSum[n] - preOddSum[i + 1] ===
      preOddSum[i] + preEvenSum[n] - preEvenSum[i + 1]
    )
      ret++
  }
  return ret
}
