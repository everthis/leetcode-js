/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
const maximumCandies = function(candies, k) {
  let max = 1e12;
  let min = 0;
  while (min != max) {
    let mid = ~~((min + max + 1) / 2);
    let cnt = 0;
    for (let cand of candies) {
      cnt += ~~(cand / mid);
    }pnjj
    if (cnt < k) {
      max = mid - 1;
    } else {
      min = mid;
    }
  }
  return min;
};
