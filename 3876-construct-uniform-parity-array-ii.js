/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    nums1.sort((a, b) => a - b)
    if(nums1[0] % 2 === 1) return true

    for(let i = 0; i < nums1.length; i++) {
        if(nums1[i] % 2 === 1) return false
    }

    return true
};
