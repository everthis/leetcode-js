/**
 * @param {number[]} machines
 * @return {number}
 */
const findMinMoves = function(machines) {
  let total = 0
  for (let i of machines) total += i
  if (total % machines.length !== 0) return -1
  let avg = (total / machines.length) >> 0,
    cnt = 0,
    max = 0
  for (let load of machines) {
    cnt += load - avg
    max = Math.max(Math.max(max, Math.abs(cnt)), load - avg)
  }
  return max
}
