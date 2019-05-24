/**
 * @param {number[][]} grid
 * @return {number}
 */
function largestIsland(grid) {
  const map = new Map() //Key: color, Val: size of island painted of that color
  map.set(0, 0) //We won't paint island 0, hence make its size 0, we will use this value later
  let n = grid.length
  let colorIndex = 2 //0 and 1 is already used in grid, hence we start colorIndex from 2
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        let size = paint(grid, i, j, colorIndex)
        map.set(colorIndex, size)
        colorIndex++
      }
    }
  }

  //If there is no island 0 from grid, res should be the size of islands of first color
  //If there is no island 1 from grid, res should be 0
  let res = map.get(2) || 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        //We use a set to avoid repeatly adding islands with the same color
        const set = new Set()
        //If current island is at the boundary, we add 0 to the set, whose value is 0 in the map
        set.add(i > 0 ? grid[i - 1][j] : 0)
        set.add(i < n - 1 ? grid[i + 1][j] : 0)
        set.add(j > 0 ? grid[i][j - 1] : 0)
        set.add(j < n - 1 ? grid[i][j + 1] : 0)

        let newSize = 1 //We need to count current island as well, hence we init newSize with 1
        for (let color of set) newSize += map.get(color)
        res = Math.max(res, newSize)
      }
    }
  }
  return res
}

//Helper method to paint current island and all its connected neighbors
//Return the size of all painted islands at the end
function paint(grid, i, j, color) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] != 1) return 0
  grid[i][j] = color
  return (
    1 +
    paint(grid, i + 1, j, color) +
    paint(grid, i - 1, j, color) +
    paint(grid, i, j + 1, color) +
    paint(grid, i, j - 1, color)
  )
}
