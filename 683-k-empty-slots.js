/**
 * @param {number[]} bulbs
 * @param {number} K
 * @return {number}
 */
const kEmptySlots = function (bulbs, K) {
  const days = new Array(bulbs.length)
  for (let i = 0; i < bulbs.length; i++) days[bulbs[i] - 1] = i + 1
  let left = 0,
    right = K + 1,
    res = Number.MAX_VALUE
  for (let i = 0; right < days.length; i++) {
    if (days[i] < days[left] || days[i] <= days[right]) {
      if (i === right) res = Math.min(res, Math.max(days[left], days[right]))
      left = i
      right = K + 1 + i
    }
  }
  return res === Number.MAX_VALUE ? -1 : res
}
