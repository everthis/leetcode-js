/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
  return atLeastK(nums, k) - atLeastK(nums, k + 1); 
};

function atLeastK(nums, k) {
    let res = 0;
    let temp = new Array(32).fill(0);

    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        for (let i = 0; i < 32; i++) {
            if ((1 << i) & nums[r]) {
                temp[i]++;
            }
        }

        while ((r - l + 1) > 0 && calc(temp, r - l + 1) < k) {
            for (let i = 0; i < 32; i++) {
                if ((1 << i) & nums[l]) {
                    temp[i]--;
                }
            }
            l++;
        }
        res += (r - l + 1);
    }

    return res;
}

// function to calculate the AND from frequency vector
function calc(temp, w) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        if (temp[i] === w) {
            res += (1 << i);
        }
    }

    return res;
}
