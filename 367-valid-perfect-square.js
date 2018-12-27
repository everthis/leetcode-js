/**
 * @param {number} num
 * @return {boolean}
 */

const isPerfectSquare = function(num) {
    let lo = 1
    let hi = num
    let mid
    let val
    while(lo <= hi) {
        mid = (lo + hi) >>> 1
        val = mid * mid
        if (val === num) {
            return true
        }
        if (val < num) {
            lo = mid + 1
        }
        if (val > num) {
            hi = mid - 1
        }
    }
    return false
};
