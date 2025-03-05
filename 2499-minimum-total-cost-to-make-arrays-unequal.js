/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumTotalCost = function(nums1, nums2) {
    const n = nums1.length;
    let ans = 0;
    const freq = new Map();
    let maxFrequency = 0, maxFrequencyValue = 0, toSwap = 0;

    for (let i = 0; i < n; i++) {
        if (nums1[i] === nums2[i]) {
            freq.set(nums1[i], (freq.get(nums1[i]) || 0) + 1);
            if (freq.get(nums1[i]) > maxFrequency) {
                maxFrequencyValue = nums1[i];
            }
            maxFrequency = Math.max(maxFrequency, freq.get(nums1[i]));
            toSwap++;
            ans += i;
        }
    }

    for (let i = 0; i < n; i++) {
        if (maxFrequency > toSwap / 2 && nums1[i] !== nums2[i] && nums1[i] !== maxFrequencyValue && nums2[i] !== maxFrequencyValue) {
            ans += i;
            toSwap++;
        }
    }

    if (maxFrequency > toSwap / 2) return -1;

    return ans;
};
