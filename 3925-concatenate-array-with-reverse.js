/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    const arr = nums.slice(0)
    arr.reverse()
    return [...nums].concat(arr)
};
