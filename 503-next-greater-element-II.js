/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function(nums) {
  const arr = []
  const n = nums.length
  const res = Array(n).fill(-1)
  nums.push(...nums)
  const stk = []
  for(let i = 0; i < 2 * n; i++) {
    const e = nums[i]
    while(stk.length && nums[stk.at(-1)] < e) {
      const idx = stk.pop()
      res[idx] = e
    }
    if(i < n) stk.push(i)
  }
  
  return res
};

// another


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(single(i, nums));
  }
  return res;
};

function single(idx, arr) {
  const base = arr[idx];
  const prev = idx === 0 ? [] : arr.slice(0, idx);
  const next = arr.slice(idx);
  const comb = next.concat(prev);
  for (let i = 0; i < comb.length; i++) {
    if (comb[i] > base) return comb[i];
  }
  return -1;
}

// another

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const nextGreaterElements = function(nums) {
  const res = [], n = nums.length
  const stack = []
  for(let i = 2 * n - 1; i >= 0; i--) {
    while(stack.length && nums[stack[stack.length - 1]] <= nums[i % n]) {
      stack.pop()
    }
    res[i % n] = stack.length ? nums[stack[stack.length - 1]] : -1
    stack.push(i % n)
  }

  return res
};
