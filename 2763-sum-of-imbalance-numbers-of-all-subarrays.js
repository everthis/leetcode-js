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
  has(value) {
    return this.countMap.has(value)
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
/**
 * @param {number[]} nums
 * @return {number}
 */
const sumImbalanceNumbers = function (nums) {
  let n = nums.length, res = 0;
  for (let i = 0; i < n; i++) {
      let tree = new MultiSet(), cnt = 0;
      tree.add(nums[i]);
      for (let j = i + 1; j < n; j++) {
          let x = nums[j];
          if (!tree.has(x)) {
              tree.add(x);
              cnt++;
              if (tree.has(x - 1)) cnt--;
              if (tree.has(x + 1)) cnt--;
          }
          res += cnt;
      }
  }
  return res;
}
