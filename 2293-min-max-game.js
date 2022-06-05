/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  let cur = nums
  while(cur.length > 1) {
    const n = cur.length
    const tmp = Array(n / 2)
    for(let i = 0; i < n / 2; i++) {
      const odd = i % 2 === 1
      if(odd) {
        tmp[i] = Math.max(cur[2 * i], cur[2 * i + 1])        
      } else {
        tmp[i] = Math.min(cur[2 * i], cur[2 * i + 1])
      }
    }
    cur = tmp
  }
  
  return cur[0]
};
