/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
const maxLength = function(ribbons, k) {
  let l = 0, r = Math.max(...ribbons)
  while(l < r) {
    const mid = r - Math.floor((r - l) / 2)
    if(valid(mid)) {
      l = mid
    } else r = mid - 1
  }
  return l
  
  function valid(mid) {
    let res = 0
    for(let e of ribbons) {
      res += ~~(e / mid)
    }
    return res >= k
  }
};
