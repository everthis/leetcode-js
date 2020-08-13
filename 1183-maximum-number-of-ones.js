/**
 * @param {number} width
 * @param {number} height
 * @param {number} sideLength
 * @param {number} maxOnes
 * @return {number}
 */
const maximumNumberOfOnes = function (width, height, sideLength, maxOnes) {
  const n1 = (height / sideLength) >> 0,
    h = height % sideLength,
    n2 = (width / sideLength) >> 0,
    w = width % sideLength
  if (maxOnes <= w * h) return n1 * n2 * maxOnes + (n1 + n2 + 1) * maxOnes
  else {
    const a = h * w,
      B = (sideLength - w) * h,
      C = (sideLength - h) * w
    let b = Math.min(B, maxOnes - a)
    let c = Math.min(maxOnes - a - b, C)
    const res1 = n1 * (a + c) + n2 * (a + b)
    c = Math.min(C, maxOnes - a)
    b = Math.min(maxOnes - a - c, B)
    const res2 = n1 * (a + c) + n2 * (a + b)
    return n1 * n2 * maxOnes + Math.max(res1, res2) + a
  }
}
