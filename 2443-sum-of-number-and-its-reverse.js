/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
  // let l = 0, r = num
  // while(l < r) {
  //   const mid = ~~((l + r) / 2)
  //   if(valid(mid) === 0) return true
  //   else if(valid(mid) < 0) l = mid + 1
  //   else r = mid - 1
  // }
  for(let i = 0; i <= num; i++) {
    if(valid(i) === 0) {
      // console.log(i)
      return true
    }
  }
  return false
  
  function valid(n) {
    return n + (parseInt( (''+n).split('').reverse().join('') ) ) - num
  }
};
