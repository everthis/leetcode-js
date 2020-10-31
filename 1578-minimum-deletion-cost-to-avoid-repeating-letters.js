/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
const minCost = function (s, cost) {
  let stackPointer = 0
  let minVal = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      if (cost[stackPointer] < cost[i]) {
        minVal += cost[stackPointer]
        stackPointer = i
      } else {
        minVal += cost[i]
      }
    } else {
      stackPointer = i
    }
  }
  return minVal
}
