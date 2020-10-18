/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = function(scores, ages) {
  const len = ages.length
  const arr = Array(len)
  for(let i = 0; i < len; i++) {
    arr[i] = [scores[i], ages[i]]    
  }
  arr.sort((a, b) => {
    if(a[1] > b[1]) return 1
    else if(a[1] === b[1]) return a[0] - b[0]
    else return -1
  })
  const dp = Array(len)
  let res = 0
  for(let i = 0; i < len; i++) {
    dp[i] = arr[i][0]
    for(let j = i - 1; j >= 0; j--) {
      if(arr[j][0] > arr[i][0] && arr[j][1] < arr[i][1]) {
         continue
      }
      dp[i] = Math.max(dp[i], dp[j] + arr[i][0])
    }
    res = Math.max(res, dp[i])
  }
  return res
};

