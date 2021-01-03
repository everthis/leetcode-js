/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let res = 0

  for (let i = 0; i < boxTypes.length && truckSize > 0; ++i) {
    let used = Math.min(boxTypes[i][0], truckSize)
    truckSize -= used
    res += used * boxTypes[i][1]
  }
  return res
}
