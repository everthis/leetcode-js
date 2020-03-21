/**
 * @param {character[][]} picture
 * @param {number} N
 * @return {number}
 */
const findBlackPixel = function(picture, N) {
  let m = []
  for (let i = 0; i < picture.length; i++) {
    let cnt = 0
    let str = ''
    for (let j = 0; j < picture[0].length; j++) {
      if (picture[i][j] === 'W') continue
      cnt++
      if (cnt > N) break
      str += j + ','
    }
    if (cnt === N) m[i] = str
  }
  let ans = 0
  for (let j = 0; j < picture[0].length; j++) {
    let cnt = 0
    let rowStr = ''
    for (let i = 0; i < picture.length; i++) {
      if (picture[i][j] === 'W') continue
      cnt++
      if (cnt === 1) rowStr = m[i]
      else if (cnt > N || m[i] !== rowStr) {
        rowStr = ''
        break
      }
    }
    if (cnt === N && rowStr) ans += N
  }
  return ans
}

// another

/**
 * @param {character[][]} picture
 * @param {number} N
 * @return {number}
 */
const findBlackPixel = function(picture, N) {
  const rows = picture.length
  if(rows === 0) return 0
  const cols = picture[0].length
  if(cols === 0) return 0
  const m = new Map()
  const colCnt = new Array(cols).fill(0)
  for(let i = 0; i < rows; i++) {
    const k = scanRow(picture, i, cols, N, colCnt)
    if(k) {
      m.set(k, (m.get(k) || 0) + 1)
    }
  }
  let res = 0
  for(let [k, v] of m) {
    if(v === N) {
      for(let i = 0; i < cols; i++) {
        if(k[i] === 'B' && colCnt[i] === N) res += N
      }
    }
  }
  return res
}

function scanRow(p, r, cols, N, arr) {
  let str = ''
  let cnt = 0
  for(let i = 0; i < cols; i++) {
    if(p[r][i] === 'B') {
      cnt++
      arr[i] += 1
    }
    str += p[r][i]
  }
  if(cnt === N) return str
  return ''
}

