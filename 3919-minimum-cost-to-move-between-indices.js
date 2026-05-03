/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minCost = function(nums, queries) {
    const n = nums.length
    const res = []

    const pref = Array(n).fill(0)

    for(let i = 0; i < n - 1; i++) {
        const leftDiff = i > 0 ? nums[i] - nums[i - 1] : Infinity
        const rightDiff = nums[i + 1] - nums[i]

        let closest
        if(i === 0) closest = i + 1
        else if(rightDiff < leftDiff) closest = i + 1
        else closest = i - 1

        if(closest === i + 1) pref[i + 1] = pref[i] + 1
        else pref[i + 1] = pref[i] + rightDiff
    }

    
    const suff = Array(n).fill(0)

    for(let i = n - 1; i > 0; i--) {
        const rightDiff = i < n - 1 ? nums[i + 1] - nums[i] : Number.MAX_SAFE_INTEGER;
        const leftDiff = nums[i] - nums[i - 1];

        let closest;
        if (i === n - 1) closest = i - 1;
        else if (leftDiff <= rightDiff) closest = i - 1;
        else closest = i + 1;

        if (closest === i - 1)
            suff[i - 1] = suff[i] + 1;
        else
            suff[i - 1] = suff[i] + leftDiff;
    }


    for(const q of queries) {
        const [l, r] = q
        if(l < r) res.push(pref[r] - pref[l])
        else res.push(suff[r] - suff[l])
    }

    return res
};
