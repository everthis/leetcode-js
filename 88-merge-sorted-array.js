/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  if (nums2.length === 0) return nums1;
  let fi = 0;
  let si = 0;
  for (let i = si; i < n; i++) {
    let se = nums2[i];
    while (se >= nums1[fi] && fi < m + n && fi < m + i) {
      fi++;
    }
    nums1.splice(fi, 0, se);
    fi++;
  }
  while (nums1.length > m + n) {
    nums1.pop();
  }
};
