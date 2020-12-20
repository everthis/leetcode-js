/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = function(nums) {
  return maxSumSubarray(nums, nums.length)
};

function maxSumSubarray(arr, n) {

  let i = 0, j = 1;
  const set = new Set();
  set.add(arr[0]);

  let sum = arr[0];
  let maxsum = sum;
  let end = arr[0]
 
  while (i < n - 1 && j < n) {
    const is_in = set.has(arr[j])
    if (!is_in) {
      sum = sum + arr[j];
      maxsum = Math.max(sum, maxsum);
    
      set.add(arr[j++]);
    } else {
      sum -= arr[i];
      set.delete(arr[i++]);
    }
  }
  return maxsum;
}

function end(s) {
  return Array.from(s).pop();
}
