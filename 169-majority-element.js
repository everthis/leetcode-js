/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const hash = {};
  nums.forEach(el => {
    if (hash.hasOwnProperty(el)) {
      hash[el] += 1;
    } else {
      hash[el] = 1;
    }
  });
  return Object.entries(hash)
    .filter(el => el[1] > Math.floor(nums.length / 2))
    .map(el => +el[0])
    .sort((a, b) => b - a)[0];
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let cnt = 1, candidate = nums[0]
  for(let i = 1, n = nums.length; i < n; i++) {
    if(candidate === nums[i]) cnt++
    else cnt--
    if(cnt === 0) {
      cnt = 1
      candidate = nums[i]
    }
  }
  return candidate
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let cnt = 1, candidate = nums[0]
  for(let i = 1, n = nums.length; i < n; i++) {
    if(cnt === 0) {
      cnt = 1
      candidate = nums[i]
    }else if(candidate === nums[i]) cnt++
    else cnt--
  }
  return candidate
};
