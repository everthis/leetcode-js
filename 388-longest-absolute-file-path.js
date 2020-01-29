/**
 * @param {string} input
 * @return {number}
 */
const lengthLongestPath = function(input) {
  const stack = []
  return input.split('\n').reduce((max, p) => {
    const level = p.lastIndexOf('\t') + 1
    stack[level] = p.length - level + (level ? stack[level - 1] : 0)
    return p.indexOf('.') === -1 ? max : Math.max(max, stack[level] + level)
  }, 0)
}
