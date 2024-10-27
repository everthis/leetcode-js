/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  const n = nums.length
  if (n === 1) {
    return nums[0] * nums[0]
  }

  const totalGcd = gcdOfArray(nums)
  const totalLcm = lcmOfArray(nums)
  let res = totalGcd * totalLcm

  for (let i = 0; i < n; i++) {
    const remaining = nums.slice(0, i).concat(nums.slice(i + 1))
    const currentGcd = gcdOfArray(remaining)
    const currentLcm = lcmOfArray(remaining)
    res = Math.max(res, currentGcd * currentLcm)
  }

  return res
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b
}
function gcd(a, b) {
  return b ? gcd(b, a % b) : a
}

function lcmOfArray(arr) {
  return arr.reduce((acc, val) => lcm(acc, val))
}

function gcdOfArray(arr) {
  return arr.reduce((acc, val) => gcd(acc, val))
}

