/**
 * @param {number[]} stations
 * @param {number} K
 * @return {number}
 */
const minmaxGasDist = function (stations, K) {
  const dis = []
  let min = 0
  let max = 1e8
  for (let i = 0; i < stations.length - 1; i++) {
    dis.push(stations[i + 1] - stations[i])
  }
  while (max - min > 1e-6) {
    const mid = min + (max - min) / 2
    if (possible(dis, mid, K)) {
      max = mid
    } else {
      min = mid
    }
  }
  return min
}

const possible = (dis, res, K) => {
  let need = 0
  for (let i = 0; i < dis.length; i++) {
    need += Math.floor(dis[i] / res)
  }
  return need <= K
}
