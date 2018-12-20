/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    if (nums.length == 0) return 0;
    let prev1 = 0;
    let prev2 = 0;
    for (let num of nums) {
        let tmp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = tmp;
    }
    return prev1;
}
