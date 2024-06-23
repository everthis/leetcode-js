/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumSum = function (grid) {
  const n = grid.length
  const m = grid[0].length
  let ans = n * m

  for (let i = 0; i < n - 1; i++) {
    const grid1 = grid.slice(0, i + 1).map((row) => row.slice())
    const ret1 = minimumArea(grid1)

    for (let j = 0; j < m - 1; j++) {
      const grid2 = grid.slice(i + 1).map((row) => row.slice(0, j + 1))
      const grid3 = grid.slice(i + 1).map((row) => row.slice(j + 1))
      // console.log(grid1, grid2, grid3);
      const ret2 = minimumArea(grid2)
      const ret3 = minimumArea(grid3)
      ans = Math.min(ans, ret1 + ret2 + ret3)
    }
  }

  for (let i = 0; i < n - 1; i++) {
    const grid1 = grid.slice(i + 1).map((row) => row.slice())
    const ret1 = minimumArea(grid1)

    for (let j = 0; j < m - 1; j++) {
      const grid2 = grid.slice(0, i + 1).map((row) => row.slice(0, j + 1))
      const grid3 = grid.slice(0, i + 1).map((row) => row.slice(j + 1))
      // console.log(grid1, grid2, grid3);
      const ret2 = minimumArea(grid2)
      const ret3 = minimumArea(grid3)
      ans = Math.min(ans, ret1 + ret2 + ret3)
    }
  }

  for (let j = 0; j < m - 1; j++) {
    const grid1 = grid.map((row) => row.slice(0, j + 1))
    const ret1 = minimumArea(grid1)

    for (let i = 0; i < n - 1; i++) {
      const grid2 = grid.slice(0, i + 1).map((row) => row.slice(j + 1))
      const grid3 = grid.slice(i + 1).map((row) => row.slice(j + 1))
      // console.log(grid1, grid2, grid3);
      const ret2 = minimumArea(grid2)
      const ret3 = minimumArea(grid3)
      ans = Math.min(ans, ret1 + ret2 + ret3)
    }
  }

  for (let j = 0; j < m - 1; j++) {
    const grid1 = grid.map((row) => row.slice(j + 1))
    const ret1 = minimumArea(grid1)

    for (let i = 0; i < n - 1; i++) {
      const grid2 = grid.slice(0, i + 1).map((row) => row.slice(0, j + 1))
      const grid3 = grid.slice(i + 1).map((row) => row.slice(0, j + 1))
      // console.log(grid1, grid2, grid3);
      const ret2 = minimumArea(grid2)
      const ret3 = minimumArea(grid3)
      ans = Math.min(ans, ret1 + ret2 + ret3)
    }
  }

  for (let i = 0; i < n - 1; i++) {
    const grid1 = grid.slice(0, i + 1).map((row) => row.slice())
    const ret1 = minimumArea(grid1)

    for (let k = i + 1; k < n - 1; k++) {
      const grid2 = grid.slice(i + 1, k + 1).map((row) => row.slice())
      const grid3 = grid.slice(k + 1).map((row) => row.slice())

      const ret2 = minimumArea(grid2)
      const ret3 = minimumArea(grid3)
      ans = Math.min(ans, ret1 + ret2 + ret3)
    }
  }

  for (let j = 0; j < m - 1; j++) {
    const grid1 = grid.map((row) => row.slice(0, j + 1))
    const ret1 = minimumArea(grid1)

    for (let k = j + 1; k < m - 1; k++) {
      const grid2 = grid.map((row) => row.slice(j + 1, k + 1))
      const grid3 = grid.map((row) => row.slice(k + 1))
      const ret2 = minimumArea(grid2)
      const ret3 = minimumArea(grid3)
      ans = Math.min(ans, ret1 + ret2 + ret3)
    }
  }

  return ans

  function minimumArea(grid) {
    const n = grid.length
    const m = grid[0].length
    let x1 = n
    let x2 = 0
    let y1 = m
    let y2 = 0

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 1) {
          x1 = Math.min(x1, i)
          x2 = Math.max(x2, i)
          y1 = Math.min(y1, j)
          y2 = Math.max(y2, j)
        }
      }
    }

    const ret = (x2 - x1 + 1) * (y2 - y1 + 1)
    return ret
  }
}
