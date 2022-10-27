/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
const minOperations = function (nums, numsDivide) {
  nums.sort((a, b) => a - b)
  let gcdVal = numsDivide[0]

  for(let i = 1, n = numsDivide.length; i < n; i++) {
    gcdVal = gcd(gcdVal, numsDivide[i])
  }

  for(let i = 0, n = nums.length; i < n && nums[i] <= gcdVal; i++) {
    if(gcdVal % nums[i] === 0) return i
  }

  return -1


  function gcd(a,b) {
    return b === 0 ? a : gcd(b, a % b)
  }
}

// another

/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function(nums, numsDivide) {
  let div = numsDivide[0], min = Infinity
  for(let i = 1, n = numsDivide.length; i < n; i++) {
    div = Math.min(div, gcd(numsDivide[i], div))
    min = Math.min(min, numsDivide[i])
  }
  // console.log(div)

  nums.sort((a, b) => a - b)
  if(div === 1 && nums[0] !== 1) return -1
  let res = 0
  for(const e of nums) {
    if(e > min) break
    if(div % e === 0) {
      return res
    }
    if(e % div !== 0) res++
    else {
      return res
    }
  }
  
  return -1
  
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
};
