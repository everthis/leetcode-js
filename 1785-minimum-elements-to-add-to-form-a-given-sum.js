/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
const minElements = function(nums, limit, goal) {
  const sum = nums.reduce((ac, e) => ac + e, 0)
  let delta = goal - sum
  if(delta === 0) return 0
  const op = delta > 0 ? '+' : '-'
  let res = 0
  delta = Math.abs(delta)
  return  Math.floor(delta / limit) + (delta % limit > 0 ? 1 : 0)
};
