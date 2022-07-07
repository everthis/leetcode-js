/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const findDiagonalOrder = function(nums) {
  const m = nums.length
  const map = new Map()
  let maxKey = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0, n = nums[i].length; j < n; j++) {
      if(!map.has(i + j)) map.set(i + j, [])
      map.get(i + j).push(nums[i][j])
      maxKey = Math.max(maxKey, i + j)
    }
  }
  // console.log(map)
  const res = []
  for(let i = 0; i <= maxKey; i++) {
    if(map.has(i)) {
      const tmp = map.get(i)
      tmp.reverse()
      res.push(...tmp)
    }
  }
  
  return res
};
