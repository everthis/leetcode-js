/**
 * Initialize your data structure here.
 */
const TwoSum = function() {
  this.hm = new Map();
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.hm.set(number, (this.hm.get(number) || 0) + 1);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for (let item of this.hm) {
    let target = value - item[0];
    if (this.hm.has(target)) {
      if (target !== item[0] || this.hm.get(target) > 1) return true;
    }
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
