/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  let res = 0
  
  for(const e of nums) {
    const set = helper(e)
    if(set.size === 4) {
      for(const i of set) res += i
    }
  }
  
  return res
    
  function helper(num) {
      const set = new Set()
      const r = ~~(Math.sqrt(num) + 1)
      for(let i = 1; i < r; i++) {
          if(num % i === 0) {
              set.add(i)
              set.add(num / i)
          }
      }
      return set
  }
};
