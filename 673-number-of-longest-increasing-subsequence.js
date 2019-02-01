/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    const len = new Array(nums.length);
    const cnt = new Array(nums.length);
    let max = 1;
    let res=1;
    len[0] = 1;
    cnt[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        len[i] = 1;
        cnt[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (len[j] + 1 > len[i]) {
                    cnt[i] = cnt[j];
                    len[i] = len[j] + 1;
                } else if (len[j] + 1 === len[i]) {
                    cnt[i] += cnt[j];
                }
            }
        }
        if (len[i] > max) {
            max = len[i];
            res = cnt[i];
        } else if (len[i] === max) {
            res += cnt[i];
        }
    }
    return res;
};
