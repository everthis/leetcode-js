/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const results = []
  kSum(nums, target, 4, 0, [], results)
  return results
}

function kSum(nums, target, k, i, acc, results) {
  if (nums[i] * k > target || nums[nums.length - 1] * k < target) return
  if (k > 2) {
    for (let j = i; j <= nums.length - k; j++) {
      if (j == i || nums[j] > nums[j - 1])
        kSum(nums, target - nums[j], k - 1, j + 1, [...acc, nums[j]], results)
    }
  } else {
    twoSum(nums, target, i, acc, results)
  }
}

function twoSum(nums, target, i, acc, results) {
  let lo = i
  let hi = nums.length - 1
  while (lo < hi) {
    const sum = nums[lo] + nums[hi]
    if (sum == target) {
      results.push([...acc, nums[lo], nums[hi]])
      while (nums[lo] == nums[lo + 1]) lo++
      while (nums[hi] == nums[hi - 1]) hi--
      lo++
      hi--
    } else if (sum < target) {
      lo++
    } else {
      hi--
    }
  }
}


// another

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
  return nSum(nums.sort((a, b) => a - b), target, 4, 0);
};

function nSum(nums, target, k, start) {
  const res = [];
  if (nums.length < k || k < 2 || target < nums[0] * k || target > nums[-1] * k)
    return res;
  if (k == 2) {
    // 2 sum; ( improved to O(n) )
    let r = nums.length - 1;
    let l = start;
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        res.push([nums[l], nums[r]]);
        //skip duplication
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (nums[l] + nums[r] < target) {
        l++;
      } else {
        r--;
      }
    }
  } else {
    for (let i = start; i < nums.length - k + 1; i++) {
      if (i === start || (i > start && nums[i] !== nums[i - 1])) {
        let temp = nSum(nums, target - nums[i], k - 1, i + 1);
        temp.forEach(t => {
          t.push(nums[i]);
          res.push(t);
        });
      }
    }
  }
  return res;
}
