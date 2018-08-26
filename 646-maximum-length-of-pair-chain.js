/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[1] - b[1]);
  let cur = Number.MIN_SAFE_INTEGER;
  let res = 0;
  for (let i = 0; i < pairs.length; i++) {
    if (cur < pairs[i][0]) {
      cur = pairs[i][1];
      res += 1;
    }
  }
  return res;
};
