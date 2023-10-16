/**
 * @param {number[]} nums
 * @return {number}
 */
const beautifulSubarrays = function (nums) {
  const map = new Map()
  map.set(0, 1)
  let res = 0
  const n = nums.length
  for(let i = 0, mask = 0; i < n; i++) {
    const cur = nums[i]
    mask ^= cur
    if(map.has(mask)) {
      res += map.get(mask)
    }
    map.set(mask, (map.get(mask) || 0) + 1)
  }

  return res
}
