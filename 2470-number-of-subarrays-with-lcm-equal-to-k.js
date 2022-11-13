/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayLCM = function(nums, k) {
   let res = 0
   const n = nums.length
   
   for(let i = 0; i < n; i++) {
     let tmp = nums[i]
     for(let j = i; j < n; j++) {
       if(k % nums[j] !== 0) break
       if(lcm(tmp, nums[j]) === k) res++
       tmp = Math.max(tmp, nums[j])
     }
   }
   
   return res
};


function lcm(a, b) {
  return a * b / gcd(a, b);
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a
}
