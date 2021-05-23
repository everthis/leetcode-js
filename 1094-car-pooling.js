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

// another

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = function(trips, capacity) {
  const arr = Array(1001).fill(0)
  for(let el of trips) {
    const [num, s, e] = el
    arr[s] += num
    arr[e] -= num
  }
  for(let i = 1; i < 1001; i++) {
    if(arr[i] !== 0) arr[i] += arr[i - 1]
    else arr[i] = arr[i - 1]
  }
  for(let e of arr) {
    if(e > capacity) return false
  }
  return true
};
