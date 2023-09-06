/**
 * @param {number[][]} ranges
 * @return {number}
 */
const countWays = function(ranges) {
  const mod = 1e9 + 7
  const n = ranges.length
  ranges.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  let last = -1, res = 1
  for (const r of ranges) {   
      if (last < r[0]) res = res * 2 % mod;
      last = Math.max(last, r[1]);
  }
  return res
};
