/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[1] - b[1])
  let end = pairs[0][1], res = 1
  for(let i = 1, len = pairs.length; i < len; i++) {
    if(pairs[i][0] > end) {
      res++
      end = pairs[i][1]
    }    
  }
  return res
};

// another

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

// another

/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[0] - b[0])
  let out = 0
  let prevEnd = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < pairs.length; i++) {
    const cur = pairs[i]
    if (prevEnd < cur[0]) {
      prevEnd = cur[1]
      out += 1
    } else {
      prevEnd = Math.min(cur[1], prevEnd)
    }
  }
  return out
}
