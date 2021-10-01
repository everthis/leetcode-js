/**
 * @param {number[]} position
 * @return {number}
 */
const minCostToMoveChips = function(position) {
  let oddSum = 0, evenSum = 0
  for(let i = 0; i < position.length; i++) {
    if(position[i] % 2 === 0) evenSum++
    else oddSum++
  }
  return Math.min(oddSum, evenSum)
};
