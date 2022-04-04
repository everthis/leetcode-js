/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
const maximumCandies = function(candies, k) {
  let max = candies.reduce((ac, e) => ac + e, 0);
  let min = 0;
  while (min < max) {
    let mid = max - Math.floor((max - min) / 2);
    let cnt = 0;
    for (let cand of candies) {
      cnt += ~~(cand / mid);
    }
    if (cnt < k) {
      max = mid - 1;
    } else {
      min = mid;
    }
  }
  return min;
};
