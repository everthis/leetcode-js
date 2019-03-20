/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = function(stones) {
  const f = new Map()
  let islands = 0
  for (let i = 0; i < stones.length; i++) {
    union(stones[i][0], ~stones[i][1]) // row, col
  }
  return stones.length - islands

  function find(x) {
    if (!f.has(x)) {
      islands++
      f.set(x, x)
    }
    if (x != f.get(x)) {
      f.set(x, find(f.get(x)))
    }
    return f.get(x)
  }

  function union(x, y) {
    x = find(x)
    y = find(y)
    if (x !== y) {
      f.set(x, y)
      islands--
    }
  }
}
