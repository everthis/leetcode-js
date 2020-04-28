/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = function (times, N, K) {
  const mins = new Array(N).fill(Infinity)
  mins[K - 1] = 0
  for (let i = 0; i < N; i++) {
    for (let [u, v, t] of times) {
      if (mins[u - 1] === Infinity) continue
      if (mins[v - 1] > mins[u - 1] + t) {
        mins[v - 1] = mins[u - 1] + t
      }
    }
  }
  return mins.includes(Infinity) ? -1 : Math.max(...mins)
}
