/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = function(nums) {
  let len = nums.length;
  let maxSize = 0;
  let maxSizeLastIdx;
  // T[n] should be the length of the largest divisible subset whose smallest number is a[n]
  const T = new Array(len).fill(0);
  const son = new Array(len).fill(0);
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (nums[i] % nums[j] === 0 && T[j] + 1 > T[i]) {
        T[i] = T[j] + 1;
        son[i] = j;
      }
    }
    if (T[i] > maxSize) {
      maxSize = T[i];
      maxSizeLastIdx = i;
    }
  }
  const re = [];
  for (let i = 0; i < maxSize; i++) {
    re.unshift(nums[maxSizeLastIdx]);
    maxSizeLastIdx = son[maxSizeLastIdx];
  }
  return re;
};
