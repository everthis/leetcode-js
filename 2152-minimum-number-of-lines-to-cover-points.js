/**
 * @param {number[][]} points
 * @return {number}
 */
const minimumLines = function(points) {
  const n = points.length
  const limit = 1 << n
  const dp = Array(limit).fill(n)
  dp[0] = 0
  for(let mask = 1; mask < limit; mask++) {
    for(let sub = mask; sub; sub = (sub - 1) & mask) {
      if(valid(sub)) {
        dp[mask] = Math.min(dp[mask], dp[mask - sub] + 1)
      }
    }
  }
  return dp[limit - 1]
  
  function valid(sub) {
    let res = true
    const arr = []
    let idx = 0
    while(sub) {
      if(sub & 1) arr.push(idx)
      sub = sub >> 1
      idx++
    }
    if(arr.length <= 2) return res
    for(let i = 2; i < arr.length; i++) {
      if(!isSameLine(points[arr[0]], points[arr[1]], points[arr[i]])) {
        return false
      }
    }
    return res
  }
};


function bitCnt(num) {
  let res = 0
  while(num) {
    if(num & 1) res++
    num = num >> 1
  }
  return res
}
function isSameLine(p1, p2, p3) {
  const delta = (p3[1] - p2[1]) * (p2[0] - p1[0]) - (p2[1] - p1[1]) * (p3[0] - p2[0])
  return delta === 0
}
