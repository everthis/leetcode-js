/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
  const m = {}
  for(let e of nums) {
      if(m[e] == null) m[e] = 0
      m[e]++
  }
  let res = 0
  // console.log(m)
  Object.entries(m).forEach(e => {
      const [k, v] = e
      if(v === 1) res += +k
  })
  return res
};
