/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
  let a = s1.length
  let b = s2.length
  let c = s3.length

  let min = Math.min(a, Math.min(b, c))
  let i = 0
  for (; i < min; i++) {
    let c1 = s1.charAt(i)
    let c2 = s2.charAt(i)
    let c3 = s3.charAt(i)
    if (c1 !== c2 || c2 !== c3) {
      break
    }
  }
  if (i === 0) return -1
  let ans = 0
  ans = a - i + b - i + c - i
  return ans
};
