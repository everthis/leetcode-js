/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
const countInterestingSubarrays = function (nums, modulo, k) {
  const n = nums.length
  const map = new Map()
  let res = 0
  map.set(0, 1)
  for (let i = 0, cnt = 0; i < n; i++) {
    const cur = nums[i]
    if (cur % modulo === k) {
      cnt++
    }
    const key = cnt % modulo
    /*
    if(key >= k) res += map.get(key - k) || 0
    else res += map.get(modulo - (k - key)) || 0
    */
    res += map.get((modulo + key - k) % modulo) || 0

    map.set(key, (map.get(key) || 0) + 1)
  }

  return res
}
