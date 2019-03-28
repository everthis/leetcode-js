/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = function(nums) {
  return mergeSort(nums, 0, nums.length - 1);
};

function mergeSort(nums, s, e) {
  if (s >= e) return 0;
  let mid = s + Math.floor((e - s) / 2);
  let cnt = mergeSort(nums, s, mid) + mergeSort(nums, mid + 1, e);
  for (let i = s, j = mid + 1; i <= mid; i++) {
    while (j <= e && nums[i] / 2.0 > nums[j]) j++;
    cnt += j - (mid + 1);
  }
  sortSubArr(nums, s, e + 1);
  return cnt;
}

function sortSubArr(arr, s, e) {
  const tmp = arr.slice(s, e);
  tmp.sort((a, b) => a - b);
  arr.splice(s, e - s, ...tmp);
}
