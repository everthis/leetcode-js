/**
 * @param {number[]} satisfaction
 * @return {number}
 */
const maxSatisfaction = function (satisfaction, max = 0) {
  satisfaction.sort((a, b) => a - b)
  let res = 0
  let total = 0
  let len = satisfaction.length
  // "We'll keep doing this as long as satisfaction[i] + total > 0" === satisfaction[i] > -total
  // It is because the current running sum needs to be greater than 0 otherwise, it would decrease res.
  for (let i = len - 1; i >= 0 && satisfaction[i] > -total; i--) {
    total += satisfaction[i]
    res += total
  }
  return res
}
