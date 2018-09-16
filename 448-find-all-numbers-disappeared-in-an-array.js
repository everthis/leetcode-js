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
