/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const rectangleArea = function(rectangles) {
  let xnodes = rectangles.reduce((arr, rect) => {
    arr.push(rect[0], rect[2])
    return arr
  }, [])
  xnodes = [...new Set(xnodes)].sort((a, b) => a - b)
  let res = 0n
  let overlay
  let ynodes
  let ysum
  for (let i = 1; i < xnodes.length; i++) {
    overlay = []
    rectangles.forEach(rect => {
      if (rect[0] <= xnodes[i - 1] && rect[2] >= xnodes[i]) overlay.push(rect)
    })
    ynodes = overlay.reduce((set, rect) => {
      set.add(rect[1])
      set.add(rect[3])
      return set
    }, new Set())
    ynodes = [...ynodes].sort((a, b) => a - b)
    ysum = 0n
    for (let i = 1; i < ynodes.length; i++) {
      for (let j = 0; j < overlay.length; j++) {
        if (overlay[j][1] <= ynodes[i - 1] && overlay[j][3] >= ynodes[i]) {
          ysum += BigInt(ynodes[i] - ynodes[i - 1])
          break
        }
      }
    }
    res += ysum * BigInt(xnodes[i] - xnodes[i - 1])
  }
  return Number(res % BigInt(Math.pow(10, 9) + 7))
}
