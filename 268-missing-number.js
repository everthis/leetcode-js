/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.push(null)
    const m = nums.length
    
    for(let i = 0; i < m; i++) {
        while(nums[i] >= 0 && nums[i] <= m - 1 && nums[i] !== nums[nums[i]]) {
            swap(nums, i, nums[i])
        }
        
    }
    
    for(let i = 0; i < m; i++) {
        if(nums[i] !== i) return i
    }
    return m

    function swap(arr, i, j) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
    }
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const n = nums.length
  let xor =  0 ^ nums[0]
  for(let i = 1; i < n; i++) xor = xor ^ i ^ nums[i]
  return xor ^ n
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const len = nums.length;
  return (len * (len + 1)) / 2 - sum(nums);
};

function sum(arr) {
  return arr.reduce((ac, el) => ac + el, 0);
}

// another
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length
  const sum = nums.reduce((ac, e) => ac + e, 0)
  const target = (n + 1) * n / 2
  return target - sum
};
