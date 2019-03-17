/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = function(N) {
    let binStr = bin(N)
    let str = ''
    for(let i = 0; i < binStr.length; i++) {
      str += binStr[i] === '0' ? '1' : '0'
    }
    return parseInt(str, 2)
};

function bin(N) {
  return (N >>> 0).toString(2)
}
