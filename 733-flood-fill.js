/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor, firstColor = image[sr][sc]) {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[sr].length ||
    image[sr][sc] !== firstColor ||
    image[sr][sc] === newColor
  ) {
    return image
  }

  image[sr][sc] = newColor

  floodFill(image, sr + 1, sc, newColor, firstColor)
  floodFill(image, sr - 1, sc, newColor, firstColor)
  floodFill(image, sr, sc + 1, newColor, firstColor)
  floodFill(image, sr, sc - 1, newColor, firstColor)

  return image
}

// another

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (
  image,
  sr,
  sc,
  newColor,
  firstColor = image[sr][sc]
) {
  const dirs = [0, -1, 0, 1, 0]
  const rows = image.length
  const cols = image[0].length
  const q = [[sr, sc]]
  while (q.length) {
    const len = q.length
    for (let i = 0; i < len; i++) {
      const cur = q.shift()
      image[cur[0]][cur[1]] = newColor
      for (let j = 0; j < 4; j++) {
        const [nr, nc] = [cur[0] + dirs[j], cur[1] + dirs[j + 1]]
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          image[nr][nc] === firstColor &&
          image[nr][nc] !== newColor
        ) {
          q.push([nr, nc])
        }
      }
    }
  }
  return image
}

