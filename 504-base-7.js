/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function(num) {
  if(num == null) return ''
  const sign = num >= 0 ? '+' : '-'
  let res = ''
  let remain = Math.abs(num)
  if(num === 0) return '0'
  while(remain > 0) {
    res = remain % 7 + res
    remain = Math.floor(remain / 7)
  }
  
  return sign === '+' ? res : '-' + res
};

// another

const convertToBase7 = function(num) {
  return num.toString(7)
};
