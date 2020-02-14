/**
 * @param {number[]} x
 * @return {boolean}
 */
const isSelfCrossing = function(x) {
  for (let i = 3, l = x.length; i < l; i++) {
    // Case 1: current line crosses the line 3 steps ahead of it
    if (x[i] >= x[i - 2] && x[i - 1] <= x[i - 3]) return true
    // Case 2: current line crosses the line 4 steps ahead of it
    else if (i >= 4 && x[i - 1] == x[i - 3] && x[i] + x[i - 4] >= x[i - 2])
      return true
    // Case 3: current line crosses the line 6 steps ahead of it
    else if (
      i >= 5 &&
      x[i - 2] >= x[i - 4] &&
      x[i] + x[i - 4] >= x[i - 2] &&
      x[i - 1] <= x[i - 3] &&
      x[i - 1] + x[i - 5] >= x[i - 3]
    )
      return true
  }
  return false
}
