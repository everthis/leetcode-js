/**
 * @param {number[]} nums
 * @return {number[]}
 */
const recoverArray = function(nums) {
  const n = nums.length, cnt = calcHash(nums)
  nums.sort((a, b) => a - b)
  for(let i = 1; i < n; i++) {
    const tk = nums[i] - nums[0]
    if(tk === 0 || tk % 2 === 1) continue
    const [valid, res] = helper(tk)
    if(valid) return res
  }
  
  function helper(tk) {
    const res = [], hash = Object.assign({}, cnt)
    for(let i = 0; i < n; i++) {
      const cur = nums[i]
      if(hash[cur] === 0) continue
      if(hash[cur + tk] === 0 || hash[cur + tk] == null) return [false]
      hash[cur]--
      hash[cur + tk]--
      res.push(cur + tk / 2)
    }
    return [true, res]
  }
  function calcHash(arr) {
    const hash = {}
    for(let e of arr) {
      if(hash[e] == null) hash[e] = 0
      hash[e]++
    }
    return hash
  }
};
