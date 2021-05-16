
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
const FindSumPairs = function(nums1, nums2) {
  this.nums1 = nums1
  this.nums2 = nums2
  const m = nums1.length, n = nums2.length
  this.mp = {}
  for(let x of nums2) {
    if(this.mp[x] == null) this.mp[x] = 0
    this.mp[x]++
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
  if(val !== 0) {
    if(!(--this.mp[this.nums2[index]])) delete this.mp[this.nums2[index]]    
  }
  this.nums2[index] += val
  if(this.mp[this.nums2[index]] == null) this.mp[this.nums2[index]] = 0
  if(val !== 0)this.mp[this.nums2[index]]++
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
  let ans = 0;
  for (let x of this.nums1) {
    let res = tot - x;
    if (!this.mp[res]) continue;
    ans += this.mp[res];
  }
  return ans;
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
