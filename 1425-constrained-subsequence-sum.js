/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const constrainedSubsetSum = function(nums, k) {
    const window = [[0,nums[0]]];
    let max = nums[0];
    for(let i=1; i<nums.length; i++){
        let [index,lastKsum] = window[0];
        if(index == i-k){
            window.shift();
        }
        let sum = Math.max(lastKsum, 0) + nums[i]
        max = Math.max(max, sum);
        while(window.length>0 && window[window.length-1][1] < sum){
            window.pop();
        }
        window.push([i,sum]);
    }
    return max;
};
