/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const getBiggestThree = function (grid) {
  const rows = grid.length
  const cols = grid[0].length
  const maxSide = Math.ceil(Math.min(rows, cols) / 2)
  let max1 = 0
  let max2 = 0
  let max3 = 0
  let sum, lastColIndex

  const calcSums = function (row, col) {
    for (let i = 0; i < maxSide; ++i) {
      if (row + i < rows && row - i >= 0 && col + i * 2 < cols) {
        sum = grid[row][col]
        if (i > 0) {
          for (let j = 1; j <= i; ++j) {
            sum += grid[row + j][col + j] + grid[row - j][col + j]
          }
          lastColIndex = col + i * 2
          for (let j = 1; j < i; ++j) {
            sum +=
              grid[row + j][lastColIndex - j] + grid[row - j][lastColIndex - j]
          }
          sum += grid[row][lastColIndex]
        }

        if (sum > max1) {
          max3 = max2
          max2 = max1
          max1 = sum
        } else if (sum > max2 && sum !== max1) {
          max3 = max2
          max2 = sum
        } else if (sum > max3 && sum !== max1 && sum !== max2) {
          max3 = sum
        }
      } else {
        break
      }
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      calcSums(i, j)
    }
  }

  return [max1, max2, max3].filter((x) => x)
}
