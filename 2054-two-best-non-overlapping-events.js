
/**
 * @param {number[][]} events
 * @return {number}
 */
const maxTwoEvents = function(events) {
  const n = events.length
  events.sort((a, b) => a[0] - b[0])
  const dp = Array.from({ length: n }, () => Array(3).fill(-1))

  return dfs(0, 0)

  function dfs(idx, cnt) {
    if(cnt === 2 || idx >= n) return 0
    if(dp[idx][cnt] === -1) {
      let end = events[idx][1]
      let lo = idx + 1, hi = n - 1;
      while (lo < hi) {
        const mid = lo + ((hi - lo) >> 1);
        if (events[mid][0] <= end) lo = mid + 1
        else hi = mid;
      }
      const include = events[idx][2] + (lo < n && events[lo][0] > end ? dfs(lo, cnt + 1) : 0);
      const exclude = dfs(idx + 1, cnt);
      dp[idx][cnt] = Math.max(include, exclude);
    }

    return dp[idx][cnt]
  }
};
