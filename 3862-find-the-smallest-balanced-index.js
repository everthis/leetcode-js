/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestBalancedIndex = function(nums) {
    const n = nums.length
    const dup = nums.slice(0)
    const leftSum = new Array(n).fill(0)

    for(let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i - 1] + dup[i - 1]
    }

    const rightProduct = new Array(n).fill(1)

    for(let i = n - 2; i >= 0; i--) {
        rightProduct[i] = rightProduct[i + 1] * dup[i + 1]
    }

    for(let i = 0; i < n; i++) {
        if(leftSum[i] === rightProduct[i]) return i
    }


    return -1
};
