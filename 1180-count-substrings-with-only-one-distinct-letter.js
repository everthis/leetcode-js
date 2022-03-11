/**
 * @param {string} s
 * @return {number}
 */
const countLetters = function(s) {
  const str = ` ${s} `
  let res = 0, cnt = 0
  for(let i = 1; i < str.length - 1; i++) {
    if(str[i] !== str[i - 1]) cnt = 1
    else cnt += 1
    res += cnt
  }
  return res
};
