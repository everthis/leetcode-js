/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
const fourSumCount = function(A, B, C, D) {
  const map = new Map()
  let res = 0
  for (let i = 0, clen = C.length; i < clen; i++) {
    for (let j = 0, dlen = D.length; j < dlen; j++) {
      map.set(
        C[i] + D[j],
        typeof map.get(C[i] + D[j]) == 'undefined'
          ? 1
          : map.get(C[i] + D[j]) + 1
      )
    }
  }
  for (let i = 0, alen = A.length; i < alen; i++) {
    for (let j = 0, blen = B.length; j < blen; j++) {
      res +=
        typeof map.get((A[i] + B[j]) * -1) == 'undefined'
          ? 0
          : map.get((A[i] + B[j]) * -1)
    }
  }
  return res
}
