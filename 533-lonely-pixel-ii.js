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
