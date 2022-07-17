/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maximumsSplicedArray = function(nums1, nums2) {
  let n = nums1.length;
  let arr = new Array(n).fill(0);
  let s1 = 0, s2 = 0;
  for (let i = 0; i < n; i++) {
      s1 += nums1[i];
      s2 += nums2[i];
  }
  for (let i = 0; i < n; i++) {
      arr[i] = nums1[i] - nums2[i];
  }
  let sum = 0;
  let min1 = 0;
  let max1 = 0;
  for (let i = 0; i < n; i++) {
      sum += arr[i];
      max1 = Math.max(sum - min1, max1);
      min1 = Math.min(min1, sum);
  }
  sum = 0;
  let min2 = 0;
  let max2 = 0;
  for (let i = 0; i < n; i++) {
      sum += arr[i];
      min2 = Math.min(sum - max2, min2);
      max2 = Math.max(max2, sum);
  }
  return Math.max(s2 + max1, s1 - min2);
};

// another

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maximumsSplicedArray = function (nums1, nums2) {
  let sum1 = 0,
    sum2 = 0,
    max1 = 0,
    max2 = 0,
    ac1 = 0,
    ac2 = 0
  sum1 = nums1.reduce((ac, e) => ac + e, 0)
  sum2 = nums2.reduce((ac, e) => ac + e, 0)
  const { max } = Math
  let res = max(sum1, sum2)
  for (let i = 0, n = nums1.length; i < n; i++) {
    ac1 += nums1[i] - nums2[i]
    ac2 += nums2[i] - nums1[i] 
    max1 = max(max1, ac1)
    max2 = max(max2, ac2)
    if(ac1 < 0) ac1 = 0
    if(ac2 < 0) ac2 = 0
  }
  res = max(res, sum1 + max2, sum2 + max1)

  return res
}
