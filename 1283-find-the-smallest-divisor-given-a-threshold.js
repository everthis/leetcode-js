/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const smallestDivisor = function(nums, threshold) {
  let l = 1, r = 1e6
  while(l < r) {
    const mid = l + Math.floor((r - l) / 2)
    if(valid(mid)) r = mid
    else l = mid + 1
  }
  return l
  
  function valid(mid) {
    let res = 0
    for(let e of nums) res += Math.ceil(e / mid)
    return res <= threshold
  }
};
