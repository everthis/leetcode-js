/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  let set = new Set(nums[0])
  for (let i = 1; i < nums.length;  i++) {
    const r = nums[i]
    const tmp = new Set()
    for(let e of r) {
      if(set.has(e)) tmp.add(e)
    }
    set = tmp
  }
  return Array.from(set).sort((a, b) => a - b)
};
