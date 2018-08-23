/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
  this.original = nums;
};
/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const res = [];
  const len = this.original.length;
  let idx = 0;
  let i = 0;
  while (idx <= len - 1) {
    i = Math.floor(Math.random() * len);
    if (res[i] == null) {
      res[i] = this.original[idx];
      idx += 1;
    }
  }
  return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
