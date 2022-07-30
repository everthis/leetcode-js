/**
 * @param {number[]} nums
 * @return {number}
 */
const minIncrementForUnique = function(nums) {
  const seen = new Set()
  const queue = []
  let res = 0
  for(const e of nums) {
    if(!seen.has(e)) seen.add(e)
    else queue.push(e)
  }
  queue.sort((a, b) => b - a)
  for(let i = 0; i <= 1e5 || queue.length; i++) {
    if(!seen.has(i) && i > last(queue)) {
      res += i - queue.pop()
    }
  }
  
  return res
    
    
  function last(arr) {
    return arr[arr.length - 1]
  }
};
