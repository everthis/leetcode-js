/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
const shortestSequence = function (rolls, k) {
  let res = 1
  let set = new Set()

  for (let i of rolls) {
    set.add(i)
    if (set.size === k) {
      res++
      set = new Set()
    }
  }
  return res
}
