/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumScore = function(nums, k) {
  const n = nums.length, {min, max} = Math
  let mini = nums[k];
  let ans = mini;
  let i = k;
  let j = k;

  while (i > 0 || j < n - 1) {
    if (i === 0 || (j + 1 < n && nums[i - 1] <= nums[j + 1])) {
      j++;
      mini = min(mini, nums[j]);
    } else {
      i--;
      mini = min(mini, nums[i]);
    }
    ans = max(ans, mini * (j - i + 1));
  }

  return ans;
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumScore = function(nums, k) {
  const n = nums.length, { max, min } = Math
  let l = k, r = k, mi = nums[k]
  let res = nums[k]
  while(l > 0 || r < n - 1) {
    if(l === 0) r++
    else if(r === n - 1) l--
    else if(nums[l - 1] < nums[r + 1]) r++
    else l--
    mi = min(mi, nums[l], nums[r])
    res = max(res, mi * (r - l + 1))
  }
  
  return res
};
