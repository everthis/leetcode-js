/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const median = nums[Math.floor(n / 2)]

  // Helper function to find the next palindromic number greater than or equal to x
  const getNextPalindromic = (x) => {
    while (true) {
      const strX = String(x)
      const revStrX = strX.split('').reverse().join('')
      if (strX === revStrX) return x
      x++
    }
  }

  // Helper function to find the previous palindromic number smaller than or equal to x
  const getPrevPalindromic = (x) => {
    while (true) {
      const strX = String(x)
      const revStrX = strX.split('').reverse().join('')
      if (strX === revStrX) return x
      x--
    }
  }

  const candidate1 = getNextPalindromic(median)
  const candidate2 = getPrevPalindromic(median)

  let cost1 = 0
  let cost2 = 0

  // Calculate the cost for candidate1
  for (const num of nums) {
    cost1 += Math.abs(num - candidate1)
  }

  // Calculate the cost for candidate2
  for (const num of nums) {
    cost2 += Math.abs(num - candidate2)
  }

  // Return the minimum cost between candidate1 and candidate2
  return Math.min(cost1, cost2)
}

// another



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
