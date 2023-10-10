/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function(nums) {
  let candidate1 = 0, candidate2 = 0, cnt1 = 0, cnt2 = 0
  for(const e of nums) {
    if(e === candidate1) {
      cnt1++
    } else if(e === candidate2) {
      cnt2++
    } else if(cnt1 === 0) {
      candidate1 = e
      cnt1++
    } else if(cnt2 === 0) {
      candidate2 = e
      cnt2++
    } else {
      cnt1--
      cnt2--
    }
  }
  
  const n = nums.length
  let c1 = 0, c2 = 0
  for(const e of nums) {
    if(e === candidate1) c1++
    if(e === candidate2) c2++
  }
  const k = Math.floor(n / 3)
  const res = []
  if(c1 > k) res.push(candidate1)
  if(c2 > k) res.push(candidate2)
  if(res[0] === res[1]) res.pop()
  return res
};

// another

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function(nums) {
  const res = []
  const hash = {}
  const len = nums.length
  const limit = Math.floor(len / 3)
  nums.forEach(el => {
    if(hash.hasOwnProperty(''+el)) {
       hash[el] += 1
    } else {
      hash[el] = 1
    }
  })
  Object.keys(hash).forEach(el => {
    if(hash[el] > limit) res.push(+el)
  })
  
  return res
};
