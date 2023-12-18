/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  nums.sort((a, b) => a - b)
  let costs = []
  let numbersPalindromic = getPalindromic(nums[Math.floor(nums.length / 2)])
  for (let i = 0; i < numbersPalindromic.length; i++) {
    costs.push(caculateCost(nums, numbersPalindromic[i]))
  }
  return Math.min(...costs)
}

function getPalindromic(number) {
  let numbers = []
  let nextNumber = number
  let prevNumber = number
  while (numbers.length <= 2) {
    if (reverseString(nextNumber.toString()) === nextNumber.toString()) {
      numbers.push(nextNumber)
    }
    if (reverseString(prevNumber.toString()) === prevNumber.toString()) {
      numbers.push(prevNumber)
    }
    nextNumber++
    prevNumber--
  }
  return numbers
}

function caculateCost(nums, palindromic) {
  let cost = 0
  for (let i = 0; i < nums.length; i++) {
    cost += Math.abs(nums[i] - palindromic)
  }
  return cost
}

function reverseString(str) {
  return str.split('').reverse().join('')
}
