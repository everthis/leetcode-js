/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
const countBlackBlocks = function (m, n, coordinates) {
  let arr = new Array(5).fill(0)
  arr[0] = (m - 1) * (n - 1)
  let mat = {}
  for (let [r, c] of coordinates) {
    mat[r] ||= []
    mat[r][c] = true
  }
  for (let [r, c] of coordinates) {
    for (let i = -1; i < 1; i++) {
      for (let j = -1; j < 1; j++) {
        let nextR = r + i
        let nextC = c + j
        if (nextR < 0 || nextC < 0 || (nextR >= m - 1) | (nextC >= n - 1))
          continue
        let res = getRes(nextR, nextC, mat)
        arr[res]++
      }
    }
  }
  for (let i = 1; i < 5; i++) {
    arr[i] = ~~(arr[i] / i)
  }
  let used = 0
  for (let i = 1; i < 5; i++) {
    used += arr[i]
  }
  arr[0] -= used
  return arr
}

const getRes = (r, c, mat) => {
  let res = 0
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let nextR = r + i
      let nextC = c + j
      if (mat[nextR]?.[nextC] === true) res++
    }
  }
  return res
}
