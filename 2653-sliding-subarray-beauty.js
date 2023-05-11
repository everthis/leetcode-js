/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const getSubarrayBeauty = function(nums, k, x) {
  const arr = Array(101).fill(0)
  const res = [], n = nums.length, delta = 50
  for(let i = 0; i < n; i++) {
    const cur = nums[i]
    const idx = cur + delta
    arr[idx]++
    if(i < k - 1) continue
    else if(i === k - 1) res.push(helper())
    else {
      const prev = nums[i - k]
      arr[prev + delta]--
      res.push(helper())
    }
  }
  
  return res
  
  function helper() {
    let res = 0, neg = 0
    // -50 ---> 0
    // -1  ---> 49
    for(let i = 0, len = arr.length; i < len; i++) {
      if(i < delta && arr[i] > 0) neg += arr[i]
      if(neg >= x) {
        res = i - delta
        break
      }
    }
    
    return res
  }
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const getSubarrayBeauty = function(nums, k, x) {
  let counter = Array(50).fill(0), ans = new Array(nums.length - k + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) counter[nums[i] + 50]++;
    if (i - k >= 0 && nums[i - k] < 0) counter[nums[i - k] + 50]--;
    if (i - k + 1 < 0) continue;
    let count = 0;
    for (let j = 0; j < 50; j++) {
      count += counter[j];
      if (count >= x) {
        ans[i - k + 1] = j - 50;
        break;
      }
    }
  }
  return ans;
};
