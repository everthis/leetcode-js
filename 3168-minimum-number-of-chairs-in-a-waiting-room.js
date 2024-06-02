/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
  let currentChairs = 0
  let maxChairsNeeded = 0

  for (let event of s) {
    if (event === 'E') {
      currentChairs++
      maxChairsNeeded = Math.max(maxChairsNeeded, currentChairs)
    } else if (event === 'L') {
      currentChairs--
    }
  }

  return maxChairsNeeded
};
