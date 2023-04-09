const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
  const n = nums.length
  let res = 0
  for(let i = 0; i < n; i++) {
    if(isPrime(nums[i][i])) {
      res = Math.max(res, nums[i][i])
    }
  }
  
  for(let i = 0; i < n; i++) {
    if(isPrime(nums[i][n - 1 - i])) {
      res = Math.max(res, nums[i][n - 1 - i])
    }
  }
  
  
  return res
    

};
