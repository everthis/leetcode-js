/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function(k, nums) {
  this.sorted = nums.sort((a, b) => a - b);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  let left = 0;
  let right = this.sorted.length - 1;
  let insertIndex = left;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (val > this.sorted[mid]) {
      left = mid + 1;
      insertIndex = mid + 1;
    } else if (val < this.sorted[mid]) {
      right = mid - 1;
      insertIndex = mid;
    } else {
      insertIndex = mid;
      break;
    }
  }
  this.sorted.splice(insertIndex, 0, val);
  return this.sorted[this.sorted.length - this.k];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
