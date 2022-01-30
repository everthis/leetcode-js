/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let res = original
    while(nums.indexOf(res) !== -1) {
      // const idx = nums.indexOf(res)
      res *= 2
    }
    return res
};
