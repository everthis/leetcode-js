/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
const SparseVector = function(nums) {
  this.seen = {}
  nums.forEach((e, i) => {
    if(e !== 0) this.seen[i] = e
  })
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
  let res = 0
  for(let [k, v] of Object.entries(vec.seen)) {
    if(k in this.seen) res += v * this.seen[k]
  }
  return res
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
