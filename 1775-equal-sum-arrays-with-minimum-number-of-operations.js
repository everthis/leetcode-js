/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minOperations = function(nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    if (len1 > 6 * len2 || len2 > 6 * len1) return -1;
    let sum1 = 0, sum2 = 0;
    for (let x of nums1) sum1 += x;
    for (let x of nums2) sum2 += x;
    if (sum1 === sum2) return 0;
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let cnt = 0;
    if (sum1 > sum2) {
        let ind1 = len1 - 1, ind2 = 0;
        while (sum1 > sum2) { 
            if (ind2 === len2 || nums1[ind1] - 1 > 6 - nums2[ind2]) sum1 -= nums1[ind1--] - 1;
            else sum2 += 6 - nums2[ind2++];
            cnt++;
        }
        return cnt;
    }
    let ind1 = 0, ind2 = len2 - 1;
    while (sum1 < sum2) {
        if (ind1 === len1 || nums2[ind2] - 1 > 6 - nums1[ind1]) sum2 -= nums2[ind2--] - 1;
        else sum1 += 6 - nums1[ind1++];
        cnt++;
    }
    return cnt;
};
