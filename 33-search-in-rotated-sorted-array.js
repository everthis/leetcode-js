/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    const len = nums.length
    let r = false
    let ridx = 0
    if(len === 0) return -1
    if(nums[0] === target) return 0
    for(let i = 1; i < len; i++) {
        if(nums[i] === target) return i
        if(nums[i] < nums[i - 1]) {
          r = true
          ridx = i
          break
        }
    }
    
    if(r === true) {
       for(let i = len - 1; i >= ridx; i--) {
           if(nums[i] === target) return i
       }
    }
    
    return -1
};

// another

const search = function(nums, target) {
  const len = nums.length
  for(let i = 0; nums[i] <= target; i++){
    if(nums[i] === target){
      return i
    }
  }
  for(let j = len - 1; nums[j] >= target; j--){
    if(nums[j] === target){
      return j
    }
  }
  return -1 
};

// another 
const search = function(nums, target) {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (nums[mid] === target) return mid

    if (nums[low] <= nums[mid] ) {
      if (target < nums[mid] && target >= nums[low]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    } else {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }

  }
  return -1
};
