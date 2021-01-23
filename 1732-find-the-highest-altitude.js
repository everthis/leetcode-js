/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
  const h = [0]
  for(let e of gain) {
    h.push(h[h.length - 1] + e)
  }
  let max = 0
  for(let e of h) {
    max = Math.max(max, e)
  }
  return max
};
