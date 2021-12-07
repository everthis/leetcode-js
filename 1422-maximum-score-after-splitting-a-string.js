/**
 * @param {string} s
 * @return {number}
 */
const maxScore = function(s) {
  const n = s.length
  let res = 0, numOfOne = 0
  for(let ch of s) {
    if(ch === '1') numOfOne++
  }
  for(let i = 0, one = 0; i < n - 1; i++) {
    if(s[i] === '1') one++
    res = Math.max(res, (i + 1 - one) + (numOfOne - one))
  }

  return res
};

// another

/**
 * @param {string} s
 * @return {number}
 */
const maxScore = function(s) {
  const n = s.length
  let res = -Infinity, one = 0, zero = 0
  for(let i = 0; i < n; i++) {
    s[i] === '0' ? zero++ : one++
    if(i !== n - 1) res = Math.max(res, zero - one)
  }

  return res + one
};
