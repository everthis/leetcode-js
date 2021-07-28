/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = function(candies, num_people) {
  const n = num_people
  const res = Array(n).fill(0)
  let idx = 0, cur = 0
  while(candies > 0) {
    cur++
    res[idx] += Math.min(cur, candies)
    idx++
    candies -= cur
    if(idx === n) idx = 0
  }
  return res
};
