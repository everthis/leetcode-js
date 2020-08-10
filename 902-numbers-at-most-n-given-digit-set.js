/**
 * @param {string[]} D
 * @param {number} N
 * @return {number}
 */
const atMostNGivenDigitSet = function (D, N) {
  const NS = '' + N
  const digit = NS.length,
    dsize = D.length
  let rtn = 0
  for (let i = 1; i < digit; ++i) rtn += Math.pow(dsize, i)
  for (let i = 0; i < digit; ++i) {
    let hasSameNum = false
    for (let d of D) {
      if (d < NS[i]) rtn += Math.pow(dsize, digit - i - 1)
      else if (d == NS[i]) hasSameNum = true
    }
    if (!hasSameNum) return rtn
  }
  return rtn + 1
}
