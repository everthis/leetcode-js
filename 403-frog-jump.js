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
  let count = new Set(stones)
  let lastStone = stones[stones.length - 1]
  let position = [0]
  let jump = [0]
  while (position.length > 0) {
    let nextPosition = position.pop()
    let nextDistance = jump.pop()
    for (let i = nextDistance - 1; i <= nextDistance + 1; i++) {
      if (i <= 0) {
        continue
      }
      let nextStone = nextPosition + i
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
