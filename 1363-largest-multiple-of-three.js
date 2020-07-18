/**
 * @param {number[]} digits
 * @return {string}
 */
const largestMultipleOfThree = function (digits) {
  const sum = digits.reduce((a, c) => a + c)
  if (sum === 0) return '0'
  const remainder = sum % 3
  digits.sort((a, b) => b - a)
  if (remainder === 0) return digits.join('')
  const doubleRemainder = remainder === 1 ? 2 : 1
  const idxs = []
  for (let i = digits.length - 1; i >= 0; i--) {
    const numRemainder = digits[i] % 3
    if (numRemainder === remainder) {
      digits[i] = ''
      return digits.join('')
    } else if (numRemainder === doubleRemainder) {
      idxs.push(i)
    }
  }
  const [idx1, idx2] = idxs
  if (idx2 === undefined) return ''

  digits[idx1] = ''
  digits[idx2] = ''
  return digits.join('')
}
