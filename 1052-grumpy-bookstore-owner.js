/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
const maxSatisfied = function(customers, grumpy, X) {
  if (customers.length === 1) return customers[0]
  const totalSatisfiedCustomers = customers.reduce(
    (ac, el, idx) => ac + (grumpy[idx] === 0 ? el : 0),
    0
  )
  const arr = customers.map((el, idx) => (grumpy[idx] === 1 ? el : 0))
  const acArr = []
  let ac = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    acArr[i] = ac = ac + arr[i]
  }
  let max = 0
  for (let i = X - 1, len = grumpy.length; i < len; i++) {
    let tmp = i - X < 0 ? 0 : acArr[i - X]
    if (acArr[i] - tmp > max) max = acArr[i] - tmp
  }

  return totalSatisfiedCustomers + max
}

// another

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
const maxSatisfied = function (customers, grumpy, X) {
  let satisfied = 0,
    maxMakeSatisfied = 0
  for (let i = 0, winOfMakeSatisfied = 0; i < grumpy.length; ++i) {
    if (grumpy[i] === 0) {
      satisfied += customers[i]
    } else {
      winOfMakeSatisfied += customers[i]
    }
    if (i >= X) {
      winOfMakeSatisfied -= grumpy[i - X] * customers[i - X]
    }
    maxMakeSatisfied = Math.max(winOfMakeSatisfied, maxMakeSatisfied)
  }
  return satisfied + maxMakeSatisfied
}
