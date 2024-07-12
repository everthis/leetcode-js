/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumVisitedCells = function (grid) {
    const m = grid.length,
      n = grid[0].length
    const dp = Array(m)
        .fill(0)
        .map(() => Array(n).fill(Infinity)),
      colStacks = Array(n)
        .fill(0)
        .map(() => []) // colStacks[j] = stack of row indexes for column j
    dp[m - 1][n - 1] = 1
    colStacks[n - 1].push(m - 1)
  
    for (let i = m - 1; i >= 0; i--) {
      let rowStack = i === m - 1 ? [n - 1] : [] // stack of column indexes for row i
      for (let j = n - 1; j >= 0; j--) {
        let colIndex = findIndex(rowStack, grid[i][j] + j)
        if (colIndex >= 0)
          dp[i][j] = Math.min(dp[i][j], 1 + dp[i][rowStack[colIndex]])
        let colStack = colStacks[j],
          rowIndex = findIndex(colStack, grid[i][j] + i)
        if (rowIndex >= 0)
          dp[i][j] = Math.min(dp[i][j], 1 + dp[colStack[rowIndex]][j])
  
        while (
          rowStack.length &&
          dp[i][rowStack[rowStack.length - 1]] >= dp[i][j]
        )
          rowStack.pop()
        rowStack.push(j)
        while (
          colStack.length &&
          dp[colStack[colStack.length - 1]][j] >= dp[i][j]
        )
          colStack.pop()
        colStack.push(i)
      }
    }
    return dp[0][0] === Infinity ? -1 : dp[0][0]
  }
  
  function findIndex(stack, maxIndex) {
    if (!stack.length) return -1
    let low = 0,
      high = stack.length - 1
    while (low < high) {
      let mid = Math.floor((low + high) / 2)
      if (stack[mid] <= maxIndex) high = mid
      else low = mid + 1
    }
    return stack[low] <= maxIndex ? low : -1
  }
  
