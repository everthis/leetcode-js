/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicate = function(nums, k, t) {
  const map = nums
    .map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val)
  let l = 0
  let r = 1
  while (r < map.length) {
    const diff = Math.abs(map[r].val - map[l].val)
    const range = Math.abs(map[r].idx - map[l].idx)
    if (diff <= t && range <= k) return true
    else if (diff > t) l++
    else if (range > k) r++
    if (l === r) r++
  }
  return false
}
