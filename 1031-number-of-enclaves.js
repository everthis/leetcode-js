/**
 * @param {number[][]} A
 * @return {number}
 */
const numEnclaves = function(A) {
  let res = 0
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  const visited = Array.from({ length: A.length }, () =>
    new Array(A[0].length).fill(false)
  )
  for (let row = 0; row < A.length; row++) {
    for (let col = 0; A[0] && col < A[0].length; col++) {
      if (
        (row === 0 ||
          col === 0 ||
          row === A.length - 1 ||
          col === A[0].length - 1) &&
        A[row][col] === 1
      ) {
        dfs(A, row, col, visited, dirs)
      }
    }
  }
  for (let row = 0; row < A.length; row++) {
    for (let col = 0; A[0] && col < A[0].length; col++) {
      if (A[row][col] === 1) {
        res += 1
      }
    }
  }
  return res
}

function dfs(A, row, col, v, dirs) {
  if (
    row < 0 ||
    row >= A.length ||
    col < 0 ||
    col >= A[0].length ||
    v[row][col] ||
    A[row][col] === 0
  )
    return

  v[row][col] = true
  A[row][col] = 0

  for (let dir of dirs) {
    dfs(A, row + dir[0], col + dir[1], v, dirs)
  }
}
