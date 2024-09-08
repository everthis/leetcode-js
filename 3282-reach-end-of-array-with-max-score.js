/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
    let n = nums.length

    if(n==1)return 0
    let res = 0,mx = nums[0],prev = nums[0]
    for(let i=1;i<n;i++){
        res+=mx
        if(nums[i]>mx)mx = nums[i]
    }
    return res
};
