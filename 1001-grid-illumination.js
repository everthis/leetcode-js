/**
 * @param {number} N
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
const gridIllumination = function (N, lamps, queries) {
  const rowMap = new Map()
  const colMap = new Map()
  const hillMap = new Map()
  const daleMap = new Map()
  const litMap = new Map()
  const direction = [
    [0, 0],
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [1, 1],
  ]
  //map what areas are lit
  for (let [x, y] of lamps) {
    insert(rowMap, x)
    insert(colMap, y)
    insert(hillMap, x + y)
    insert(daleMap, x - y)
    litMap.set(N * x + y, true)
  }
  const result = new Array(queries.length).fill(0)
  let count = 0
  for (let [x, y] of queries) {
    if (
      rowMap.get(x) > 0 ||
      colMap.get(y) > 0 ||
      hillMap.get(x + y) > 0 ||
      daleMap.get(x - y) > 0
    ) {
      result[count] = 1
    }
    for (let [i, j] of direction) {
      let newX = x + i
      let newY = y + j
      if (litMap.has(N * newX + newY)) {
        decrease(rowMap, newX)
        decrease(colMap, newY)
        decrease(hillMap, newX + newY)
        decrease(daleMap, N * newX + newY)
        litMap.delete(N * newX + newY)
      }
    }
    count++
  }
  return result
}
const insert = (map, value) => {
  if (map.has(value)) {
    map.set(value, map.get(value) + 1)
  } else {
    map.set(value, 1)
  }
}
const decrease = (map, value) => {
  if (map.has(value)) {
    map.set(value, map.get(value) - 1)
  }
}
