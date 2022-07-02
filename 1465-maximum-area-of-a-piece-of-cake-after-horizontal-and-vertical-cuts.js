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

// another

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = function(h, w, horizontalCuts, verticalCuts) {
  return (BigInt(maxGap(h, horizontalCuts)) * BigInt(maxGap(w, verticalCuts))) % BigInt(1e9 + 7)
  function maxGap(limit, arr) {
    let res = 0
    arr.sort((a, b) => a - b)
    for(let i = 0, n = arr.length; i < n; i++) {
      let tmp = i === 0 ? arr[0] : arr[i] - arr[i - 1]
      res = Math.max(res, tmp)
    }
    res = Math.max(res, limit - arr[arr.length - 1])
    
    return res
  }
};
