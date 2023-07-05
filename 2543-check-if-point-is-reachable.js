/**
 * @param {number} targetX
 * @param {number} targetY
 * @return {boolean}
 */
const isReachable = function(targetX, targetY) {
  const g = gcd(targetX, targetY)
  return (g & (g - 1)) === 0
  
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
};
