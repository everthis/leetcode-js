/**
 * @param {number[]} sweetness
 * @param {number} K
 * @return {number}
 */
const maximizeSweetness = function (sweetness, K) {
  let left = 1,
    right = 1e9 / (K + 1)
  while (left < right) {
    let mid = (left + right + 1) >> 1
    let cur = 0,
      cuts = 0
    for (let a of sweetness) {
      if ((cur += a) >= mid) {
        cur = 0
        if (++cuts > K) break
      }
    }
    if (cuts > K) left = mid
    else right = mid - 1
  }
  return left
}
