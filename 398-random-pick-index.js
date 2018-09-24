/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  const res = [];
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      res.push(i);
    }
  }
  return res[Math.floor(Math.random() * res.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.pick(target)
 */
