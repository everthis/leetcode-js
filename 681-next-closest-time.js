/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = function (time) {
  const [a, b, _, c, d] = time.split('').map((n) => parseInt(n))
  const min = Math.min(a, b, c, d)
  if ([a, b, c].some((n) => n > d)) {
    return [a, b, ':', c, Math.min(...[a, b, c].filter((n) => n > d))].join('')
  }
  if ([a, b, d].some((n) => n > c && n < 6)) {
    return [
      a,
      b,
      ':',
      Math.min(...[a, b, d].filter((n) => n > c && n < 6)),
      min,
    ].join('')
  }
  if ([a, c, d].some((n) => n > b && ((a == 2 && n < 4) || a < 2))) {
    return [
      a,
      Math.min(
        ...[a, c, d].filter((n) => n > b && ((a == 2 && n < 4) || a < 2))
      ),
      ':',
      min,
      min,
    ].join('')
  }
  if ([b, c, d].some((n) => n > a && n <= 2)) {
    return [[b, c, d].some((n) => n > a && n <= 2), min, ':', min, min].join('')
  }
  return [min, min, ':', min, min].join('')
}
