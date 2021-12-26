/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  if(('' +num).length === 1) return true
  const tmp = (''+num).endsWith('0')
  return !tmp
};
