/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let max = 1;
    let stack = [];
    for(let i =0;i<nums.length;i++){
        if(nums[i]&nums[i+1]) continue;
        stack.push(nums[i])
        for(let j =i+1;j<nums.length;j++){
            let state = true;
            for(el of stack){
                if(el&nums[j]){
                    state=false;
                    break;
                }
            }
            if(state) {
                stack.push(nums[j]);
                max = Math.max(max,stack.length);
            }
            else{
                stack = []
                break;
            }
        }
    }
    return max;
};
