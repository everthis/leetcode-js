/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
const maximumWhiteTiles = function (tiles, carpetLen) {
  const sorted = tiles.sort((a, b) => a[0] - b[0])
  let res = 0

  let total = 0
  let right = 0

  for (let tile of sorted) {
    const start = tile[0]
    const end = start + carpetLen - 1
    while (right < sorted.length && tiles[right][1] < end) {
      total += tiles[right][1] - tiles[right][0] + 1
      right++
    }
    if (right === sorted.length || sorted[right][0] > end) {
      res = Math.max(res, total)
    } else {
      res = Math.max(res, total + (end - tiles[right][0] + 1))
    }
    total -= tile[1] - tile[0] + 1
  }

  return res
}

// another

/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
const maximumWhiteTiles = function (tiles, carpetLen) {
  tiles.sort((a, b) => a[0] - b[0])
  let res = 0, total = 0, right = 0
  const n = tiles.length
  for(let i = 0; i < n; i++) {
    const [l, r] = tiles[i]
    const end = l + carpetLen - 1
    while(right < n && tiles[right][1] <= end) {
      total += tiles[right][1] - tiles[right][0] + 1 
      right++
    }
    
    if(right === n || tiles[right][0] > end) {
      res = Math.max(res, total)
    } else {
      res = Math.max(res, total + end - tiles[right][0] + 1)
    }
    
    total -= r - l + 1
  }
  
  return res
}
