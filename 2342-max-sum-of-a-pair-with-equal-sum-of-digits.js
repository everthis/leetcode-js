/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumSum = function(nums) {
  const map = new Map()
  for(const e of nums) {
    const k = dSum(e)
    add(map, k, e)
  }
  // console.log(map)
  let res = -1
  for(const [k, v] of map) {
    if(v.length === 2) {
      res = Math.max(res, v[0] + v[1])
    }
  }
  
  return res
  
  
  function add(map, k, v) {
    if(!map.has(k)) {
      map.set(k, [v])
    } else {
      if(map.get(k).length === 1) {
        map.get(k).push(v)
      } else {
        const arr = map.get(k)
        arr.push(v)
        arr.sort((a, b) => b - a)
        arr.splice(2, 1)
      }
    }
  }
  
  function dSum(num) {
    let res = 0
    
    let cur = num
    while(cur) {
      res += cur % 10
      cur = ~~(cur / 10)
    }
    
    return res
  }
};
