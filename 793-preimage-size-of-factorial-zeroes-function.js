/**
 * @param {number} K
 * @return {number}
 */
const preimageSizeFZF = function(K) {
  let last = 1
  while (last < K) last = last * 5 + 1
  while (last > 1) {
    K %= last
    if (last - 1 == K) return 0
    last = ((last - 1) / 5) >> 0
  }
  return 5
}
