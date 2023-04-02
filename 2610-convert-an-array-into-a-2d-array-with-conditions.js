/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = function(nums) {

  const hash = new Map()
  for(const e of nums) {
    if(!hash.has(e)) hash.set(e, 0)
    hash.set(e, hash.get(e) + 1)
  }
  
  const arr = []
  for(const [k, v] of hash) {
    arr.push([v, k])
  }
  
  arr.sort((a, b) => b[0] - a[0])
  
  const res = []
  for(let i = 0, len = arr.length; i < len; i++) {
    const [freq, val] = arr[i]
    for(let j = 0; j < freq; j++) {
      if(res[j] == null) res[j] = []
      res[j].push(val)
    }
  }
  
  return res
};
