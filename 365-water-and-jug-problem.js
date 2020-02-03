/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
const canMeasureWater = function(x, y, z) {
  return z === 0 || (x + y >= z && z % gcd(x, y) === 0)
}
function gcd(x, y) {
  if (y === 0) {
    return x
  }
  return gcd(y, x % y)
}
