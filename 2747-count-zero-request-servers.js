/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
const countServers = function(n, logs, x, queries) {
let queryArr = [],
  ans = []
for (let i = 0; i < queries.length; i++) {
  queryArr.push([i, queries[i]])
}
queryArr.sort(function (a, b) {
  return a[1] - b[1]
})
logs.sort(function (a, b) {
  return a[1] - b[1]
})

let sumOfServersInCurrentTimeWindow = 0,
  serverFrequenceyInCurrentTimeWindow = []
for (let i = 0, left = 0, right = 0; i < queryArr.length; i++) {
  let queryIndex = queryArr[i][0]
  let startTime = queryArr[i][1] - x //Start time for the current query
  let endTime = queryArr[i][1] //End time for the current query
  while (right < logs.length && logs[right][1] <= endTime) {
    //Include all the servers till endTime
    let s = logs[right][0]
    if (
      serverFrequenceyInCurrentTimeWindow[s] === undefined ||
      serverFrequenceyInCurrentTimeWindow[s] === 0
    ) {
      serverFrequenceyInCurrentTimeWindow[s] = 1
      sumOfServersInCurrentTimeWindow++
    } else {
      serverFrequenceyInCurrentTimeWindow[s] += 1
    }
    right++
  }
  while (left < logs.length && logs[left][1] < startTime) {
    //Exclude all the servers older than startTime
    let s = logs[left][0]
    if (serverFrequenceyInCurrentTimeWindow[s] === 1) {
      serverFrequenceyInCurrentTimeWindow[s] = 0
      sumOfServersInCurrentTimeWindow--
    } else {
      serverFrequenceyInCurrentTimeWindow[s] -= 1
    }
    left++
  }
  ans[queryIndex] = n - sumOfServersInCurrentTimeWindow
}
return ans

};
