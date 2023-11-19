/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
  let n = s.length
  let left = n - 1
  let right = n - 1
  let cnt = 0
  while (left >= 0) {
    if (s.charAt(left) === '1') {
      cnt += right - left
      right--
    }
    left--
  }
  return cnt
};
