/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
  nums.sort((a, b) => a - b)
  const cnt = {}
  for(let e of nums) {
    if(cnt[e] == null) cnt[e] = 0
    cnt[e]++
  }
  // console.log(cnt)
  const res = []
  for(let i = 0, n = nums.length; i < n; i++) {
    if(i === 0){
      if(nums[i + 1] !== nums[i] + 1 && cnt[nums[i]] === 1) {
        res.push(nums[i])  
      }
    } 
    else if(i === n - 1 ) {
      if(nums[i] !== nums[i - 1] + 1 && cnt[nums[i]] === 1) {
        res.push(nums[i])
      }
    }
    else if(cnt[nums[i]] === 1 && nums[i] !== nums[i - 1] + 1 && nums[i] !== nums[i + 1] - 1) {
      res.push(nums[i])
    }
  }
  
  return res
};
