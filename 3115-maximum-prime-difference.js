const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function(nums) {
  let fi = -1, li = nums.length
  const n = nums.length
  for(let i = 0; i < n; i++) {
    const e = nums[i]
    if(isPrime(e)) {
      fi = i
      break
    }
  }
  for(let i = n - 1; i >= 0; i--) {
    const e = nums[i]
    if(isPrime(e)) {
      li = i
      break
    }
  }
  
  if(fi === -1) return 0
  
  return li - fi
};
