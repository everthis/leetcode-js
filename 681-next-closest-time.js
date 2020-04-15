/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = function (time) {
  const digits = time.split('')
  const orderedDigits = [...digits].sort()
  for (let i = digits.length - 1; i >= 0; i--) {
    const current = digits[i]
    switch (i) {
      case 4:
        digits[i] = findSmallest(digits[i], '9', orderedDigits)
        if (digits[i] > current) return digits.join('')
        break
      case 3:
        digits[i] = findSmallest(digits[i], '5', orderedDigits)
        if (digits[i] > current) return digits.join('')
        break
      case 1:
        digits[i] = findSmallest(
          digits[i],
          digits[i - 1] == '2' ? '4' : '9',
          orderedDigits
        )
        if (digits[i] > current) return digits.join('')
        break
      case 0:
        digits[i] = findSmallest(digits[i], '2', orderedDigits)
        if (digits[i] > current) return digits.join('')
        break
    }
  }
  return digits.join('')
}

const findSmallest = (low, high, order) => {
  for (let d = 0; d < order.length; d++) {
    if (order[d] != ':' && order[d] > low && order[d] <= high) {
      return order[d]
    }
  }
  return order[0]
}
