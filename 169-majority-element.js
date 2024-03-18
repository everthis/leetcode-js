/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let el, cnt = 0
  for(let e of nums) {
      if(cnt === 0) {
          el = e
          cnt++
      } else if(el === e) {
          cnt++
      } else {
          cnt--
      }
  }
  let tmp = 0
  for(const e of nums) {
     if(e === el) tmp++
  }
  return tmp > Math.floor(nums.length / 2) ? el : null
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
   let res = 0, cnt = 0
   
   for(const e of nums) {
     if(cnt === 0) {
       res = e
     }
     if(res === e) cnt++
     else cnt--
   }
   
   return res
};

// another

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
