/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function(stones) {
  stones.sort((a, b) => a - b)
  while (stones.length > 1) {
    const num = Math.abs(stones.pop() - stones.pop())
    stones.splice(stones.findIndex(item => item >= num), 0, num)
  }
  return stones[0] 
};
