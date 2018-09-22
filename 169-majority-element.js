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
