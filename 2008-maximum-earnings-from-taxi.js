/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
const maxTaxiEarnings = function(n, rides) {
  const { max } = Math
  const rideStartAt = Array.from({length: n}, () => []);
  for (let ride of rides) {
    let s = ride[0], e = ride[1], t = ride[2];
    rideStartAt[s].push([e, e - s + t]);  // [end, dollar]
  }
  const dp = Array(n+1).fill(0);
  for (let i = n-1; i >= 1; --i) {
    for (let [e, d] of rideStartAt[i]) {
      dp[i] = max(dp[i], dp[e] + d);
    }
    dp[i] = max(dp[i], dp[i + 1]);
  }
  return dp[1];
};

// another

/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
const maxTaxiEarnings = function(n, rides) {
  const size = rides.length
  rides.sort((a, b) => a[1] - b[1])
  const dp = [[0,0]]
  for(const [s, e, t] of rides) {
    const cur = bs(dp, s) + (e - s + t)
    if(cur > dp[dp.length - 1][1]) {
      dp.push([e, cur])
    }
  }
  return dp[dp.length - 1][1]

  function bs(arr, t) {
    let l = 0, r = arr.length - 1
    while(l < r) {
      const mid = r - ((r - l) >> 1)
      if(arr[mid][0] > t) r = mid - 1
      else l = mid
    }
    // console.log(arr, t, l)
    return arr[l][1]
  }
};
