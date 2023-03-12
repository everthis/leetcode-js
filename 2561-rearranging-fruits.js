/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
const minCost = function (basket1, basket2) {
  const [map1, map2] = [new Map(), new Map()]
  let minVal = Number.MAX_SAFE_INTEGER

  for (const val of basket1) {
    if (!map1.has(val)) map1.set(val, 0)
    map1.set(val, map1.get(val) + 1)
    minVal = Math.min(minVal, val)
  }
  for (const val of basket2) {
    if (!map2.has(val)) map2.set(val, 0)
    map2.set(val, map2.get(val) + 1)
    minVal = Math.min(minVal, val)
  }

  const [swapList1, swapList2] = [[], []]
  for (const [key, c1] of map1.entries()) {
    const c2 = map2.get(key) || 0
    if ((c1 + c2) % 2) return -1
    if (c1 > c2) {
      let addCnt = (c1 - c2) >> 1
      while (addCnt--) {
        swapList1.push(key)
      }
    }
  }
  for (const [key, c2] of map2.entries()) {
    const c1 = map1.get(key) || 0
    if ((c1 + c2) % 2) return -1
    if (c2 > c1) {
      let addCnt = (c2 - c1) >> 1
      while (addCnt--) {
        swapList2.push(key)
      }
    }
  }

  swapList1.sort((a, b) => a - b)
  swapList2.sort((a, b) => b - a)
  const n = swapList1.length

  let res = 0
  for (let i = 0; i < n; i++) {
    res += Math.min(2 * minVal, swapList1[i], swapList2[i])
  }

  return res
}
