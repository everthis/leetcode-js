/**
 * @param {number[]} nums
 * @return {number}
 */
const medianOfUniquenessArray = function(nums) {
  const n = nums.length;
  const {floor} = Math;
  const total = (n * (n + 1)) / 2;
  const half = floor((total + 1) / 2);
  let l = 1, r = n
  while(l < r) {
    const mid = l + floor((r - l) / 2);
    if (atMostK(nums, mid) >= half) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l

  function atMostK(nums, k) {
    const hash = new Map(), n = nums.length;
    let res = 0
    let i = 0, j = 0
    while(j < n) {
        const e = nums[j]
        if(!hash.has(e)) hash.set(e, 0)
        hash.set(e, hash.get(e) + 1)
        while(i < j && hash.size > k) {
            
            hash.set(nums[i], hash.get(nums[i]) - 1)
            if(hash.get(nums[i]) === 0) {
                hash.delete(nums[i])
            }
            i++
        }
        res += j - i + 1

        j++
    }

    return res
  }
};


// another


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
