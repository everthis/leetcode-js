/**
 * @param {number[][]} graph
 * @return {number}
 */
const catMouseGame = function (g) {
  const n = g.length
  const win = Array(2)
    .fill(0)
    .map(() => Array(n * n).fill(0))
  for (let i = 0; i < n; i++) {
    win[0][i] = 1
    win[1][i] = 1
  }
  for (let i = 1; i < n; i++) {
    win[0][i * n + i] = 2
    win[1][i * n + i] = 2
  }

  while (true) {
    let anew = false
    for (let m = 0; m < n; m++) {
      inner: for (let c = 1; c < n; c++) {
        if (win[0][m * n + c] == 0) {
          let und = false
          for (let e of g[m]) {
            if (win[1][e * n + c] == 1) {
              win[0][m * n + c] = 1
              anew = true
              continue inner
            }
            if (win[1][e * n + c] == 0) {
              und = true
            }
          }
          if (!und) {
            win[0][m * n + c] = 2
            anew = true
          }
        }
      }
    }
    for (let c = 1; c < n; c++) {
      inner: for (let m = 0; m < n; m++) {
        if (win[1][m * n + c] == 0) {
          let und = false
          for (e of g[c]) {
            if (e == 0) continue
            if (win[0][m * n + e] == 2) {
              win[1][m * n + c] = 2
              anew = true
              continue inner
            }
            if (win[0][m * n + e] == 0) {
              und = true
            }
          }
          if (!und) {
            win[1][m * n + c] = 1
            anew = true
          }
        }
      }
    }
    if (!anew) break
  }

  return win[0][1 * n + 2]
}
