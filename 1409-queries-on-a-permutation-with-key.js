/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
  const nums = Array.from({ length: m }, (_, i) => i + 1)
  const res = []
  for(const q of queries) {
    const idx = nums.indexOf(q)
    nums.splice(idx, 1)
    nums.unshift(q)
    res.push(idx)
  }
  return res
};
