/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
const maximumRequests = function (n, requests) {
  let max = 0
  helper(requests, 0, Array(n).fill(0), 0)
  return max

  function helper(requests, index, count, num) {
    // Traverse all n buildings to see if they are all 0. (means balanced)
    if (index === requests.length) {
      for (let i of count) {
        if (0 !== i) {
          return
        }
      }
      max = Math.max(max, num)
      return
    }
    // Choose this request
    count[requests[index][0]]++
    count[requests[index][1]]--
    helper(requests, index + 1, count, num + 1)
    count[requests[index][0]]--
    count[requests[index][1]]++

    // Not Choose the request
    helper(requests, index + 1, count, num)
  }
}
