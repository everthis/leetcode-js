/**
 * @param {number[]} maxHeights
 * @return {number}
 */
const maximumSumOfHeights = function (maxHeights) {
  let n = maxHeights.length

  let left = Array(n).fill(0)
  let stack = []
  stack.push(-1)
  let res = 0,
    cur = 0
  for (let i = 0; i < n; i++) {
    while (stack.length > 1 && maxHeights[stack.at(-1)] > maxHeights[i]) {
      let j = stack.pop()
      cur -= (j - stack.at(-1)) * maxHeights[j]
    }
    cur += 1 * (i - stack.at(-1)) * maxHeights[i]
    stack.push(i)
    left[i] = cur
  }

  stack = []
  stack.push(n)
  cur = 0
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 1 && maxHeights[stack.at(-1)] > maxHeights[i]) {
      let j = stack.pop()
      cur -= 1 * -(j - stack.at(-1)) * maxHeights[j]
    }
    cur += 1 * -(i - stack.at(-1)) * maxHeights[i]
    stack.push(i)
    res = Math.max(res, left[i] + cur - maxHeights[i])
  }

  return res
}
