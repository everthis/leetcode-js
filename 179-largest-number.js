/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
  const arr = nums
    .map(v => v.toString())
    .sort((a, b) => (a + b < b + a ? 1 : -1))
    .join("");

  return arr[0] === "0" ? "0" : arr;
};
