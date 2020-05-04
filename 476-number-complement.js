/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
  const toBin = num => (num >>> 0).toString(2)
  const flip = str => {
    let res = ''
    for(let c of str) res += (c === '1' ? '0' : '1')
    return res
  }
  return parseInt(flip(toBin(num)), 2)
};
