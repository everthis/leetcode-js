/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function(weights, days) {
  let l = Math.max(...weights)
  let r = weights.reduce((ac, e) => ac + e, 0)
  while(l < r) {
     const mid = Math.floor((l + r) / 2)
     if(valid(mid)) {
       r = mid
     } else l = mid + 1
  }
  
  return l
  
  function valid(mid) {
    let res = 1, cur = 0
    for(let w of weights) {
      if(cur + w > mid) {
        cur = 0
        res++
      }
      cur += w
    }
    return res <= days
  }
};
