/**
 * @param {number[]} nums
 * @return {number}
 */
const continuousSubarrays = function(nums) {
  let res = 0
  let l = 0
  let r = 0
  const mq1 = [], mq2 = []
  for(let r = 0; r < nums.length; r++) {
    const e = nums[r]
    while(mq1.length && nums[mq1.at(-1)] < e) mq1.pop()
    mq1.push(r)
    while(mq2.length && nums[mq2.at(-1)] > e) mq2.pop()
    mq2.push(r)
    
    while(mq1.length && mq2.length && Math.abs(nums[mq1[0]] - nums[mq2[0]]) > 2) {
      if(mq1.length && mq1[0] <= l) mq1.shift()
      if(mq2.length && mq2[0] <= l) mq2.shift()
      l++
    }
    
    res += r - l + 1
  }
  return res
};


// another


/**
 * @param {number[]} nums
 * @return {number}
 */
const continuousSubarrays = function(nums) {
  let res = 0
  let l = 0
  let r = 0
  const mset = new MultiSet()
  for(let r = 0; r < nums.length; r++) {
    mset.add(nums[r])
    while (mset.max - mset.min > 2) {
      mset.remove(nums[l])
      l++
    }

    res += r - l + 1
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
