/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  const n = 10001
  const values = new Array(n).fill(0)
  for (let num of nums) values[num] += num

  let take = 0,
    skip = 0
  for (let i = 0; i < n; i++) {
    const takei = skip + values[i]
    const skipi = Math.max(skip, take)
    take = takei
    skip = skipi
  }
  return Math.max(take, skip)
}
