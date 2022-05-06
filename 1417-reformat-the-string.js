/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  let str = '', num = ''
  const isDigit = ch => ch >= '0' && ch <= '9'
  for(const ch of s) {
    if(isDigit(ch)) num += ch
    else str += ch
  }
  if(Math.abs(str.length - num.length) > 1) return ''
  if(str.length > num.length) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
      res += str[i]
      if(i < num.length) res += num[i]
    }
    return res
  } else {
    let res = ''
    for (let i = 0; i < num.length; i++) {
      res += num[i]
      if(i < str.length) res += str[i]
    }
    return res
  }
};
