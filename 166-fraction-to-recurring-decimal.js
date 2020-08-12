/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
const fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return '0'
  let s = ''
  if (Math.sign(numerator) !== Math.sign(denominator)) s += '-'
  let n = Math.abs(numerator)
  const d = Math.abs(denominator)
  s += Math.floor(n / d)
  n %= d
  if (n === 0) return s
  s += '.'
  const map = {}
  while (n !== 0) {
    map[n] = s.length
    n *= 10
    s += Math.floor(n / d)
    n %= d
    const i = map[n] // repeat starting index
    if (i != null) return `${s.slice(0, i)}(${s.slice(i)})`
  }
  return s
}
