/**
 * @param {number[]} weight
 * @return {number}
 */
var maxBalancedShipments = function (weight) {
  const n = weight.length
  let res = 0
  let i = 0

  while (i < n) {
    let maxWeight = weight[i]
    let j = i

    while (j < n) {
      maxWeight = Math.max(maxWeight, weight[j])

      if (weight[j] < maxWeight) {
        res++
        break
      }
      j++
    }

    i = j === i ? i + 1 : j + 1
  }

  return res
}
