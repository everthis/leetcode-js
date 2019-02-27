/**
 * @param {number[]} nums
 * @return {boolean}
 */
const circularArrayLoop = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            continue;
        }
        let j = i, k = getIndex(i, nums);
        while (nums[k] * nums[i] > 0 && nums[getIndex(k, nums)] * nums[i] > 0) {
            if (j === k) {
                // check for loop with only one element
                if (j === getIndex(j, nums)) {
                    break;
                }
                return true;
            }
            j = getIndex(j, nums);
            k = getIndex(getIndex(k, nums), nums);
        }
        // loop not found, set all element along the way to 0
        j = i;
        let val = nums[i];
        while (nums[j] * val > 0) {
            let next = getIndex(j, nums);
            nums[j] = 0;
            j = next;
        }
    }
    return false;
};

    
function getIndex(i, nums) {
    const n = nums.length;
    return i + nums[i] >= 0? (i + nums[i]) % n: n + ((i + nums[i]) % n);
}
