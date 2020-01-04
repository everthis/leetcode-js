/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = function(nums, lower, upper) {
  const list = []
  for (let n of nums) {
    let justBelow = n - 1
    if (lower === justBelow) list.push(lower + '')
    else if (lower < justBelow) list.push(lower + '->' + justBelow)
    lower = n + 1
  }
  if (lower === upper) list.push(lower + '')
  else if (lower < upper) list.push(lower + '->' + upper)
  return list
}

// another

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = function(nums, lower, upper) {
  const res = [];
  let next = lower;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < next) continue;
    if (nums[i] === next) {
      next++;
      continue;
    }
    range(next, nums[i] - 1, res);
    next = nums[i] + 1;
  }
  if (next <= upper) range(next, upper, res);
  return res;
  function range(l, r, a) {
    a.push(l < r ? `${l}->${r}` : `${l}`)
  }
};
    
