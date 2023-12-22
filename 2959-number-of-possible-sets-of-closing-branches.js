/**
 * @param {number} n
 * @param {number} maxDistance
 * @param {number[][]} roads
 * @return {number}
 */
const numberOfSets = function(n, maxDistance, roads) {
  let res = 0
  const {min} = Math
  for(let i = 0, limit = 1<<n; i < limit; i++) {
    const mat = Array.from({ length: n }, () => Array(n).fill(1e9))
    for(const [u,v,w] of roads) {
      if( (1 & (i >> u)) && (1 & (i >> v))) {
        mat[u][v] = mat[v][u] = min(w, mat[u][v])
      }
    }
    for(let x = 0; x < n; x++) mat[x][x] = 0

    for(let k = 0; k < n; k++) {
      for(let x = 0; x < n; x++) {
        for(let y = 0; y < n; y++) {
          mat[x][y] = min(mat[x][y], mat[x][k] + mat[k][y])
        }
      }
    }

    let tmp = true
    for(let x = 0; x < n; x++) {
      for(let y = 0; y < n; y++) {
        if( (1 & (i >> x)) && (1 & (i >> y))) {
          tmp &= mat[x][y] <= maxDistance
        }
      }
    }

    res += tmp ? 1 : 0
  }
  
  return res
};
