/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
const mergeTriplets = function (triplets, target) {
  let n = triplets.length
  const ans = Array(3).fill(0)
  const { max } = Math
  for (let i = 0; i < n; i++) {
    if (
      triplets[i][0] <= target[0] &&
      triplets[i][1] <= target[1] &&
      triplets[i][2] <= target[2]
    ) {
      ans[0] = max(ans[0], triplets[i][0])
      ans[1] = max(ans[1], triplets[i][1])
      ans[2] = max(ans[2], triplets[i][2])
    }
  }
  return ans[0] == target[0] && ans[1] == target[1] && ans[2] == target[2]
}
