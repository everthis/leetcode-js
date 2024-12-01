/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let x = n
    while ((x & (x + 1)) !== 0) {
      x += 1
    }
    return x
};
