/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  if (!nums || k > nums.length) return 0;

  const larger = [];
  const smaller = [];
  const pivot = nums[parseInt(nums.length / 2)];
  let pivotCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];

    if (ele > pivot) larger.push(ele);
    else if (ele === pivot) pivotCount++;
    else smaller.push(ele);
  }

  if (larger.length >= k) return findKthLargest(larger, k);
  else if (k - larger.length - pivotCount <= 0) return pivot;
  else return findKthLargest(smaller, k - larger.length - pivotCount);
};
