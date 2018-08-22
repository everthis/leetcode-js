/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function(nums) {
  const hash = {};
  nums.forEach((el, idx) => {
    if (hash.hasOwnProperty(el)) {
      hash[el] += 1;
      delete hash[el];
    } else {
      hash[el] = 1;
    }
  });
  return Object.keys(hash).map(el => +el);
};
