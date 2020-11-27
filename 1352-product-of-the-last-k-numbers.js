/*
 * @lc app=leetcode id=1352 lang=javascript
 *
 * [1352] Product of the Last K Numbers
 */

// @lc code=start

const ProductOfNumbers = function() {
  this.sum = [1]
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  if(num > 0) {
    this.sum.push(this.sum[this.sum.length - 1] * num)
  } else {
    this.sum = [1]
  }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  const len = this.sum.length
  return k < len ? this.sum[len - 1] / this.sum[len - 1 - k] : 0
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
