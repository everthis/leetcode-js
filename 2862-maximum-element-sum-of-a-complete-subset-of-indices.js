/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const n = nums.length;
    
    // Find squares 
    let sq = [1];
    while(sq.at(-1) < n) sq.push((sq.length+1) ** 2);

    let res = 0;
    for(let i=1; i<=n; ++i) {
        let cur = 0;
        for(const s of sq) { // s*i will give {i*1, i*4, i*9, ...}
            const idx = s*i;
            if(idx>n) break;
            cur += nums[idx-1];
        }
        res = Math.max(res, cur);
    }

    return res;
};
