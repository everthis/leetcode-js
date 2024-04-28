/**
 * @param {number[]} nums
 * @return {number}
 */
var medianOfUniquenessArray = function (nums) {
  let low = 1
  let high = nums.length
  let n = nums.length

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if (countDistinct(nums, mid) >= Math.floor(((n * (n + 1)) / 2 + 1) / 2)) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  if (
    countDistinct(nums, low - 1) === Math.floor(((n * (n + 1)) / 2 + 1) / 2)
  ) {
    return low - 1
  }
  return low
}

function countDistinct(nums, k) {
  let occurrences = new Map()
  let left = 0
  let count = 0
  let result = 0

  for (let right = 0; right < nums.length; right++) {
    occurrences.set(nums[right], (occurrences.get(nums[right]) || 0) + 1)
    if (occurrences.get(nums[right]) === 1) {
      count++
    }
    while (count > k) {
      occurrences.set(nums[left], occurrences.get(nums[left]) - 1)
      if (occurrences.get(nums[left]) === 0) {
        count--
      }
      left++
    }
    result += right - left + 1
  }
  return result
}

function force(nums) {
  let l = []
  for (let i = 0; i < nums.length; i++) {
    let set = new Set()
    for (let j = i; j < nums.length; j++) {
      set.add(nums[j])
      l.push(set.size)
    }
  }
  l.sort((a, b) => a - b)
  return l[Math.floor(l.length / 2)]
}
