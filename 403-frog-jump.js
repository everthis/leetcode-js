/**
 * @param {number[]} stones
 * @return {boolean}
 */
const canCross = function(stones) {
  for (let i = 3; i < stones.length; i++) {
    if (stones[i] > stones[i - 1] * 2) {
      return false
    }
  }
  const count = new Set(stones)
  const lastStone = stones[stones.length - 1]
  const position = [0]
  const jump = [0]
  while (position.length > 0) {
    const nextPosition = position.pop()
    const nextDistance = jump.pop()
    for (let i = nextDistance - 1; i <= nextDistance + 1; i++) {
      if (i <= 0) {
        continue
      }
      const nextStone = nextPosition + i
      if (nextStone == lastStone) {
        return true
      } else if (count.has(nextStone)) {
        position.push(nextStone)
        jump.push(i)
      }
    }
  }
  return false
}
