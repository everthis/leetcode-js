/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const goodIndices = function(nums, k) {
  const n = nums.length
  const pre = Array(n).fill(1), post = Array(n).fill(1)
  
  let preV = nums[0], cnt = 1
  for(let i = 1; i < n; i++) {
    if(nums[i] <= preV) cnt++
    else {
      cnt = 1
    }
    pre[i] = cnt
    preV = nums[i]
  }

  preV = nums[n - 1], cnt = 1
  for(let i = n - 2; i >= 0; i--) {
    if(nums[i] <= preV) cnt++
    else {
      cnt = 1
    }
    post[i] = cnt
    preV = nums[i]
  }
  // console.log(pre, post)
  
  const res = []
  
  for(let i = 1; i < n; i++) {
    if(pre[i - 1] >= k && post[i + 1] >= k) res.push(i)
  }
  
  return res
};
