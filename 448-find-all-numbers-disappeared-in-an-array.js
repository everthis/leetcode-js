/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
  const res = [];
  nums.forEach((el, idx) => {
    res[el - 1] = 1;
  });
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (res[i] == null) {
      arr.push(i + 1);
    }
  }
  return arr;
};

// another

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
  for(let i = 0, len = nums.length; i < len; i++) {
    const idx = Math.abs(nums[i]) - 1
    nums[idx] = - Math.abs(nums[idx])
  }
  const res = []
  nums.forEach((e, i) => {
    if(e > 0) res.push(i + 1)
  })
  return res
};
