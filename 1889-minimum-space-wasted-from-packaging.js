/**
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
var minWastedSpace = function (packages, boxes) {
  packages.sort(function (a, b) {
    return a - b
  })
  let count = 0,
    b,
    wastage,
    minWastage = Number.MAX_SAFE_INTEGER,
    flag = false
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].sort(function (a, b) {
      return a - b
    })
    b = 0
    wastage = 0
    count = 0
    if (boxes[i][boxes[i].length - 1] < packages[packages.length - 1]) {
      //This supplier's largest box is smaller than our larget package, this supplier can't be used
      continue
    }
    while (count < packages.length && b < boxes[i].length) {
      if (packages[count] <= boxes[i][b]) {
        wastage += boxes[i][b] - packages[count]
        if (wastage > minWastage) {
          //Need not to porcess this supplier if wastage has already been more than minWastage
          break
        }
        count++
      } else {
        b++
      }
    }
    if (count === packages.length) {
      flag = true //We have found atleas 1 answer
      if (wastage < minWastage) {
        minWastage = wastage
      }
    }
  }
  if (flag === false) {
    return -1
  }
  return minWastage % 1000000007
}
