/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
const canChoose = function(groups, nums) {
  let gi = 0, ni = 0
  const n = groups.length, m = nums.length
  while(gi < n && ni < m) {
    const len = groups[gi].length
    let pass = true
    if(nums[ni] !== groups[gi][0]) {
      ni++
      continue
    }
    for(let i = 1; i < len; i++) {
      if(nums[ni + i] !== groups[gi][i]) {
        pass = false
        break
      }
    }
    if(pass) {
      gi++
      ni += len
    } else {
      ni++
    }
  }
  if(gi >= n) return true

  return false

};
