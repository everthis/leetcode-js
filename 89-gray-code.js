/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function(n) {
  return n
    ? (x => [...x, ...x.map((v, i) => x[x.length - 1 - i] + x.length)])(
        grayCode(n - 1)
      )
    : [0]
}
