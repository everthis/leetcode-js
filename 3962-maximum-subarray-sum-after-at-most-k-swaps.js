/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
  const n = nums.length
  let res = -150000000

  const sorted = [...nums].sort((a, b) => a - b)
  const candidates = new MultiSet()
  const others = new MultiSet()

  for (let start = 0; start < n; start++) {
    candidates.clear()
    others.clear()

    for (let i = 0; i < Math.max(0, n - k); i++) {
      others.add(sorted[i])
    }

    for (let i = Math.max(0, n - k); i < n; i++) {
      candidates.add(sorted[i])
    }

    let currentSum = 0

    for (let end = start; end < n; end++) {
      if (others.size() > 0) {
        let val
        if (others.has(nums[end])) {
          val = nums[end]
          others.remove(val)
        } else {
          const largestOther = others.max
          val = largestOther
          others.remove(largestOther)
        }
        candidates.add(val)
      }

      const largestCandidate = candidates.max
      currentSum += largestCandidate
      candidates.remove(largestCandidate)

      res = Math.max(res, currentSum)
    }
  }

  return res 
};
class MultiSet {
  constructor() {
    this.countMap = new Map()
    this.valueList = []
  }
  remove(value) {
    if(!this.countMap.has(value)) return false
    let index = binarySearch(this.valueList, value)
    if (this.countMap.get(value) === 1) {
      this.valueList.splice(index, 1)
      this.countMap.delete(value)
    } else {
      this.countMap.set(value, (this.countMap.get(value) || 0) - 1)
    }
    return true
  }
  add(value) {
    let index = binarySearch(this.valueList, value)
    if (index < 0) {
      this.valueList.splice(-index - 1, 0, value)
      this.countMap.set(value, 1)
    } else {
      this.countMap.set(value, this.countMap.get(value) + 1)
    }
  }
  has(e) {
    return this.countMap.has(e)
  }
  clear() {
    this.countMap.clear()
    this.valueList = []
  }
  size() {
    return this.countMap.size
  }
  get max() {
    return this.valueList[this.valueList.length - 1]
  }
  get min() {
    return this.valueList[0]
  }
}

function binarySearch(arr, val) {
  let l = 0, r = arr.length
  while( l < r ) {
    const mid = Math.floor((l + r) / 2)
    if(arr[mid] < val) {
       l = mid + 1
    } else {
      r = mid
    }
  }
  if(arr[l] !== val) return -(l + 1)
  
  return l
}
