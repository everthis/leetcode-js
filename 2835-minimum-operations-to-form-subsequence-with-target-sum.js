/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minOperations = function(nums, target) {
    const n = nums.length, arr = Array(31).fill(0);
    let sum = 0;

    for(const x of nums) ++arr[Math.log2(x)], sum += x;
    if(sum < target) return -1;

    let i=0, res = 0;
    while(i < 31) {
        if(1<<i & target) {
            if(arr[i]) --arr[i];
            else {
                while(i < 30 && !arr[i]) ++i, ++res;
                --arr[i];
                continue;
            }
        }
        arr[++i] += Math.floor(arr[i-1] / 2);
    }

    return res;    
};
