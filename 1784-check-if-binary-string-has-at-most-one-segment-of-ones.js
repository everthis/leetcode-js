/**
 * @param {string} s
 * @return {boolean}
 */
const checkOnesSegment = function(s) {
  let res = 1
  for(let i = 1, len = s.length; i < len; i++) {
    if(s[i] === '1' && s[i - 1] === '0') res++
    if(s[i] === '1' && s[i - 1] === '1') continue
  }
  return res <= 1
};
