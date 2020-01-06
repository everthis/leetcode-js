/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
const strobogrammaticInRange = function(low, high) {
  const pairs = [
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['8', '8'],
    ['9', '6']
  ]
  let count = 0
  function dfs(left, right, current) {
    if (left > right) {
      const s = current.join('')
      if (
        (s.length === low.length && s < low) ||
        (s.length === high.length && s > high)
      ) {
        return
      }
      count++
      return
    }
    for (const [p1, p2] of pairs) {
      current[left] = p1
      current[right] = p2
      if (left === right && p1 !== p2) {
        continue
      }
      if (current.length !== 1 && current[0] === '0') {
        continue
      }
      dfs(left + 1, right - 1, current)
    }
  }
  for (let i = low.length; i <= high.length; i++) {
    dfs(0, i - 1, Array(i).fill(''))
  }
  return count
}
