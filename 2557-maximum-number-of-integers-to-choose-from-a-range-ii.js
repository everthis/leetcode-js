/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  const set = new Set(banned);

  let low = 0;
  let high = n;
  let possibleVal = 0;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    let totalSum = (mid * (mid + 1)) / 2;
    for (const val of set) {
      if (val <= mid) totalSum -= val;
    }

    if (totalSum <= maxSum) {
      possibleVal = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  let ans = possibleVal;
  for (const val of set) {
    if (val <= possibleVal) ans--;
  }

  return ans;
};
