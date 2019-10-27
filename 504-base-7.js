/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function(num) {
  if(num == null) return ''
  const sign = num >= 0 ? '+' : '-'
  let res = ''
  let remain = Math.abs(num)
  if(num === 0) return '' + num
  while(remain > 0) {
    let tmp = remain % 7
    res = tmp + res
    remain = Math.floor(remain / 7)
  }
  
  return sign === '+' ? res : '-' + res
};
