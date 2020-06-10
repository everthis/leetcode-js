/**
 * @param {number[]} arr
 * @return {number}
 */
const minimumMoves = function (arr) {
  const n = arr.length
  const dp = Array.from({ length: n }, () => Array(n).fill(n))
  // handle edge situation: subarray size == 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1
  }
  // handle edge situation: subarray size == 2
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = arr[i] === arr[i + 1] ? 1 : 2
  }
  // for subarray size >= 3:
  for (let size = 3; size <= n; size++) {
    for (let left = 0, right = left + size - 1; right < n; left++, right++) {
      // if arr[left] == arr[right], then the two number: arr[left] and arr[right] can be
      // removed when the last move of subarray arr[left + 1:right - 1]
      if (arr[left] === arr[right]) {
        dp[left][right] = dp[left + 1][right - 1]
      }
      // or, if we cannot remove arr[left] and arr[right] in one move (the last move),
      // the subarray arr[left:right] must can be split into two subarrays
      // and remove them one by one.
      for (let mid = left; mid < right; mid++) {
        dp[left][right] = Math.min(
          dp[left][right],
          dp[left][mid] + dp[mid + 1][right]
        )
      }
    }
  }
  return dp[0][n - 1]
}
