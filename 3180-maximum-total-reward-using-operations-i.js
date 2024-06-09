/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (rewardValues) {
  rewardValues.sort((a, b) => a - b)
  const ts = new Set([0])
  for (const item of rewardValues) {
    const set = new Set()
    for (const t of ts) {
      if (t < item) {
        set.add(t + item)
      }
    }
    for (const value of set) {
      ts.add(value)
    }
  }
  return Math.max(...ts)
}
