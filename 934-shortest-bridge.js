/**
 * @param {number[][]} A
 * @return {number}
 */
const shortestBridge = function(A) {
    const h = A.length
    const w = A[0].length
    let queue = []
  
    let foundOneIsland = false
    for (let i = 0; i < h && !foundOneIsland; i++) {
      for (let j = 0; j < w && !foundOneIsland; j++) {
        if (A[i][j] == 1) {
          dfs(A, i, j, w, h)
          foundOneIsland = true
        }
      }
    }
    // BFS每一个元素向外扩展，直至找到另一个小岛
    const direction = [0, 1, 0, -1, 0]
    let result = 0
    while (queue.length !== 0) {
      let size = queue.length
      while (size--) {
        const item = queue.pop()
        const x = item.i
        const y = item.j
        for (let i = 0; i < 4; i++) {
          // 向四个方向扩展 技巧
          const newX = x + direction[i]
          const newY = y + direction[i + 1]
          if (newX < 0 || newY < 0 || newX > h - 1 || newY > w - 1 || A[newX][newY] == 2) {
            continue
          }
          // 找到另一个小岛
          if (A[newX][newY] == 1) {
            return result
          }
          A[newX][newY] = 2
          queue.unshift({
            i: newX,
            j: newY
          })
        }
      }
      ++result
    }
  
    return result
  
    // 通过DFS找到其中一个小岛
    function dfs (A, i, j, w, h) {
      if (i < 0 || j < 0 || i > h - 1 || j > w - 1 || A[i][j] != '1') {
        return
      }
  
      A[i][j] = 2
      queue.push({
        i,
        j
      })
      dfs(A, i - 1, j, w, h)
      dfs(A, i + 1, j, w, h)
      dfs(A, i, j - 1, w, h)
      dfs(A, i, j + 1, w, h)
    }
  };
