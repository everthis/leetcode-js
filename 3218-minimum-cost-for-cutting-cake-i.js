class Cut {
  constructor(cost, type) {
    this.cost = cost
    this.type = type
  }
}
/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function (m, n, horizontalCut, verticalCut) {
  const cuts = []
  for (let i = 0; i < horizontalCut.length; i++) {
    cuts.push(new Cut(horizontalCut[i], 'H'))
  }
  for (let j = 0; j < verticalCut.length; j++) {
    cuts.push(new Cut(verticalCut[j], 'V'))
  }

  cuts.sort((a, b) => -a.cost + b.cost)

  let totalCost = 0
  let horizontalSegments = 1
  let verticalSegments = 1

  for (const cut of cuts) {
    if (cut.type === 'H') {
      totalCost += cut.cost * verticalSegments
      horizontalSegments++
    } else {
      totalCost += cut.cost * horizontalSegments
      verticalSegments++
    }
  }

  return totalCost
}
