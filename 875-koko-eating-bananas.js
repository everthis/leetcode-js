/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
  let ma = -1
  for(const e of piles) {
    if(e > ma) ma = e
  }
  
  let l = 1, r = ma
  
  while(l < r) {
    const mid = Math.floor((l + r) / 2)
    if(valid(mid)) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  
  return l
  
  function valid(val) {
    let res = 0
    for(const e of piles) {
      res += Math.ceil(e / val)
    }
    
    return res <= h
  }
};
