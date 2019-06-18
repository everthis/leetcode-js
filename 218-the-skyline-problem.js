/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
const getSkyline = function getSkyline(
  buildings,
  begin = 0,
  end = buildings.length
) {
  if (begin === end) {
    return []
  } else if (end - begin === 1) {
    const [Li, Ri, Hi] = buildings[begin]
    return [[Li, Hi], [Ri, 0]]
  } else {
    const pivotIndex = begin + Math.ceil((end - begin) / 2)
    return combineOutputs(
      getSkyline(buildings, begin, pivotIndex),
      getSkyline(buildings, pivotIndex, end)
    )
  }
}

function combineOutputs(a, b) {
  let aIndex = 0
  const aLength = a.length
  let bIndex = 0
  const bLength = b.length
  let aHeight = 0
  let bHeight = 0
  const combined = []
  while (aIndex < aLength || bIndex < bLength) {
    if (aIndex < aLength && bIndex === bLength) {
      return combined.concat(a.slice(aIndex))
    } else if (bIndex < bLength && aIndex === aLength) {
      return combined.concat(b.slice(bIndex))
    } else {
      const previousMax = Math.max(aHeight, bHeight)
      const nextX = Math.min(a[aIndex][0], b[bIndex][0])
      if (a[aIndex][0] === nextX) {
        aHeight = a[aIndex][1]
        aIndex++
      }
      if (b[bIndex][0] === nextX) {
        bHeight = b[bIndex][1]
        bIndex++
      }
      const newMax = Math.max(aHeight, bHeight)
      if (newMax !== previousMax) {
        combined.push([nextX, newMax])
      }
    }
  }
  return combined
}
