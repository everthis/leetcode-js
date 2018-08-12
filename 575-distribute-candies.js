/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = function(candies) {
  const uniqNum = candies.filter((el, idx, arr) => arr.indexOf(el) === idx)
    .length;
  const halfNum = candies.length / 2;
  return halfNum > uniqNum ? uniqNum : halfNum;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
