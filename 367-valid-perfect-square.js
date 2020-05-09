/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  let s = 0
  let e = num
  while(s <= e) {
    const mid = s + ((e - s) >> 1)
    const res = mid ** 2
    if(res === num) return true
    if(res < num) s = mid + 1
    else e = mid - 1
  }
  return false
};
