/**
 * @param {number} n
 * @return {number}
 */
const lastRemaining = function(n) {
  let left = true
  let remaining = n
  let step = 1
  let head = 1
  while (remaining > 1) {
    if (left || remaining % 2 === 1) {
      head = head + step
    }
    remaining = remaining >> 1
    step = step * 2
    left = !left
  }
  return head
}
