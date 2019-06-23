/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = function(trips, capacity) {
  let stops = new Array(1001).fill(0)
  for (let t of trips) {
    stops[t[1]] += t[0]
    stops[t[2]] -= t[0]
  }
  for (let i = 0; capacity >= 0 && i < 1001; ++i) capacity -= stops[i]
  return capacity >= 0
}
