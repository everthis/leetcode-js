/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
    let tmp = 0
    let idx = 0
    while(tmp <= n) {
          if((tmp = Math.pow(2, idx)) === n) {
              return true
          } else {
              idx += 1
          }
    }
    return false
};
