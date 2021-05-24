/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = function(bookings, n) {
  let res = new Array(n).fill(0)
  for (let v of bookings) {
    res[v[0] - 1] += v[2]
    if (v[1] < n) res[v[1]] -= v[2]
  }
  for (let i = 1; i < n; ++i) res[i] += res[i - 1]
  return res
}

// another

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
const corpFlightBookings = function(bookings, n) {
  const arr = Array(n + 2).fill(0)
  for(let [s, e, num] of bookings) {
    arr[s] += num
    arr[e + 1] -= num
  }
  for(let i = 1; i <= n; i++) {
    if(arr[i] !== 0) arr[i] += arr[i - 1]
    else arr[i] = arr[i - 1]
  }
  return arr.slice(1, n + 1)
};
