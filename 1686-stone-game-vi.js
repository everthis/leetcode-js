/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
const stoneGameVI = function (aliceValues, bobValues) {
  let data = []
  const length = aliceValues.length
  for (let i = 0; i < length; i++) {
    data.push([aliceValues[i] + bobValues[i], aliceValues[i], bobValues[i]])
  }
  data.sort((a, b) => a[0] - b[0])
  data = data.reverse()

  let aScore = 0
  let bScore = 0
  for (let i = 0; i < length; i++) {
    if (i % 2 == 0) aScore += data[i][1]
    else bScore += data[i][2]
  }

  if (aScore > bScore) return 1
  else if (aScore == bScore) return 0
  else return -1
}
