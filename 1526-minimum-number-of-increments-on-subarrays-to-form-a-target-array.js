/**
 * @param {number[]} target
 * @return {number}
 */
const minNumberOperations = function(target) {
  let totalOperations = target[0];
  for (let i = 1; i < target.length; ++i) {
    if (target[i] > target[i-1]) {
      totalOperations += target[i] - target[i-1];
    }
  }
  return totalOperations;
};
