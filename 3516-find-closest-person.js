/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    const cmp = Math.abs(x - z) - Math.abs(y - z)
    if (cmp < 0) {
        return 1
    } else if (cmp > 0) {
        return 2
    } else {
        return 0
    }
};
