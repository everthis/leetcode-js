/**
 * @param {number} n
 * @return {number}
 */
const magicalString = function(n) {
  const queue = []
  let one = true
  let count1 = 0
  while (n-- > 0) {
    queue.shift()
    let c = one ? 1 : 2
    one = !one
    queue.push(c)
    count1 += 2 - c
    if (queue[0] === 2 && n-- > 0) {
      queue.push(c)
      count1 += 2 - c
    }
  }
  return count1
}
