
const SmallestInfiniteSet = function() {
  this.nums = new Set(Array.from({ length: 1001 }, (e, i) => i + 1))
  this.tmp = new Set()
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  const min = Math.min(...this.nums)
  this.nums.delete(min)
  this.tmp.add(min)
  return min
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  if(this.tmp.has(num)) {
    this.tmp.delete(num)
    this.nums.add(num)
  } 
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
