/**
 * @param {number[]} arr
 * @return {number}
 */
const trimMean = function(arr) {
  const n = arr.length
  arr.sort((a, b) => a - b)
  const idx = n / 20
  let tmp = arr.slice(idx, n - idx)
  const sum = tmp.reduce((ac, cur) => ac + cur, 0)
  return sum / (n -idx * 2)
};
