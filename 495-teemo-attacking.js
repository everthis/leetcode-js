/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function(timeSeries, duration) {
  if (timeSeries == null || timeSeries.length === 0) return 0
  let res = 0
  for (let i = 1, len = timeSeries.length; i < len; i++) {
    const tmp =
      timeSeries[i - 1] + duration > timeSeries[i]
        ? timeSeries[i] - timeSeries[i - 1]
        : duration
    res += tmp
  }
  return res + duration
}
