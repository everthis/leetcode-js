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
var minimumCost = function(m, n, horizontalCut, verticalCut) {
  let cuts = []
  for (let i = 0; i < horizontalCut.length; i++) {
    cuts.push(new Cut(horizontalCut[i], 'H'))
  }
  for (let j = 0; j < verticalCut.length; j++) {
    cuts.push(new Cut(verticalCut[j], 'V'))
  }

  cuts.sort((a, b) => -a.cost + b.cost)

  let ans = 0
  let hCount = 1
  let vCount = 1

  for (let cut of cuts) {
    if (cut.type === 'H') {
      ans += cut.cost * vCount
      hCount++
    } else {
      ans += cut.cost * hCount
      vCount++
    }
  }

  return ans
};
