/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = function(nums) {
  const n = nums.length;
  if(n === 0 || n === 1) return nums
  let maxSize = 0;
  const dp = Array(n).fill(1)
  nums.sort((a, b) => a - b)
  for(let i = 1; i < n; i++) {
    for(let j = i - 1; j >= 0; j--) {
      if(nums[i] % nums[j] === 0) {
        const tmp = dp[j] + 1
        if(tmp > dp[i]) dp[i] = tmp         
      }
    }
    if(dp[i] > maxSize) maxSize = dp[i]
  }
  const res = []
  let pivot = 0
  for(let i = n - 1; i >= 0; i--) {
    if(dp[i] === maxSize && (pivot % nums[i] === 0)) {
      pivot = nums[i]
      maxSize--
      res.push(nums[i])
    }
  }
  
  return res
};

// another

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
