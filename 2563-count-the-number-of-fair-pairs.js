/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countFairPairs = function(nums, lower, upper) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  
  let total = BigInt(n * (n - 1)) / 2n
  return Number(total - BigInt(large(nums, upper) + low(nums, lower)))
};


function large(arr, target) {
    let count = 0;
    for (let lo = 0, hi = arr.length - 1; lo < hi; ) {
        if (arr[lo] + arr[hi] > target) {
            count += (hi - lo);
            hi--;
        } else  {
            lo++;
        }
    }
    return count;
}

function low(arr, target) {
    let count = 0;
    for (let lo = 0, hi = arr.length - 1; lo < hi; ) {
        if (arr[lo] + arr[hi] < target) {
            count += (hi - lo);
            lo++;
        } else  {
            hi--;
        }
    }
    return count;
}

// another

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countFairPairs = function(nums, lower, upper) {
  nums.sort((a, b) => a - b)
  return lowerBound(nums, upper + 1) - lowerBound(nums, lower)
};

function lowerBound(nums, value) {
    let l = 0, r = nums.length - 1
    let res = 0
    while(l < r) {
        const sum = nums[l] + nums[r]
        if(sum < value) {
            res += r - l
            l++
        } else {
            r--
        }
    }

    return res
}
