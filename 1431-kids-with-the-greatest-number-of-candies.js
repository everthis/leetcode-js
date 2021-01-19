/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
  const res = []
  let max = 0
  for(let e of candies) max = Math.max(e, max)
  max -= extraCandies
  for(let i = 0, len = candies.length; i < len; i++) {
    res.push(candies[i] >= max)
  }
  return res
};
