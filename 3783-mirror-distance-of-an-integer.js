/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
  let rev = 0
    let tmp = n
    while(tmp) {
        let r = tmp % 10
        rev = rev * 10 + r
        tmp = Math.floor(tmp / 10)
    }
    return Math.abs(n - rev)
};
