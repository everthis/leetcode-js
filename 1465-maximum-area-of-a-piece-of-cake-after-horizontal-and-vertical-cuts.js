/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = function(h, w, horizontalCuts, verticalCuts) {
  return getMax(h, horizontalCuts) * getMax(w, verticalCuts) % (10 ** 9 + 7)
};

function getMax(limit, cuts) {
  cuts.sort((a, b) => a - b)
  const n = cuts.length
  let max = Math.max(cuts[0], limit - cuts[n - 1])
  for(let i = 1; i < n; i++) {
    max = Math.max(max, cuts[i] - cuts[i - 1])
  }
  return max
}
