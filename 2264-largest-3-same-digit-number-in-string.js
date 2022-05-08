/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
  let res = ''
  const n = num.length
  const isDigit = ch => ch >= '0' && ch <= '9'
  for(let i = 1; i < n - 1; i++) {
    const ch = num[i]
    if(!isDigit(ch)) continue
    if(!isDigit(num[i - 1])) continue
    if(!isDigit(num[i + 1])) continue
    if(num[i - 1] == num[i] && num[i] === num[i + 1]) {
      if(ch.repeat(3) >  res) res = ch.repeat(3)
    }
  }
  
  return res
};
