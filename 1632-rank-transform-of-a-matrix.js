/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const matrixRankTransform = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const rowIndex = Array.from({ length: m }, () => Array(n).fill(0))
  const colIndex = Array.from({ length: m }, () => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      row.push([matrix[i][j], j])
    }

    row.sort((a, b) => a[0] - b[0])
    for (let j = 0; j < n; j++) {
      rowIndex[i][j] = row[j][1]
    }
  }
  for (let i = 0; i < n; i++) {
    const col = []
    for (let j = 0; j < m; j++) {
      col.push([matrix[j][i], j])
    }
    col.sort((a, b) => a[0] - b[0])
    for (let j = 0; j < m; j++) {
      colIndex[j][i] = col[j][1]
    }
  }
  const result = Array.from({ length: m }, () => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = 1
    }
  }
  let changed = true
  while (changed) {
    changed = shakeRow(matrix, rowIndex, result)
    changed = shakeCol(matrix, colIndex, result) || changed
  }
  return result
}

function shakeCol(matrix, colIndex, result) {
  let changed = false
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 1; j < matrix.length; j++) {
      if (matrix[colIndex[j][i]][i] == matrix[colIndex[j - 1][i]][i]) {
        if (result[colIndex[j][i]][i] != result[colIndex[j - 1][i]][i])
          changed = true
        result[colIndex[j][i]][i] = Math.max(
          result[colIndex[j][i]][i],
          result[colIndex[j - 1][i]][i]
        )
        result[colIndex[j - 1][i]][i] = Math.max(
          result[colIndex[j][i]][i],
          result[colIndex[j - 1][i]][i]
        )
      } else {
        if (result[colIndex[j][i]][i] < result[colIndex[j - 1][i]][i] + 1) {
          changed = true
          result[colIndex[j][i]][i] = result[colIndex[j - 1][i]][i] + 1
        }
      }
    }
  }
  return changed
}

function shakeRow(matrix, rowIndex, result) {
  let changed = false
  for (let i = 0; i < matrix.length; i++) {
    let rowInd = rowIndex[i]
    let resu = result[i]
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][rowInd[j]] == matrix[i][rowInd[j - 1]]) {
        if (resu[rowInd[j]] != resu[rowInd[j - 1]]) changed = true
        resu[rowInd[j]] = Math.max(resu[rowInd[j - 1]], resu[rowInd[j]])
        resu[rowInd[j - 1]] = Math.max(resu[rowInd[j - 1]], resu[rowInd[j]])
      } else {
        if (resu[rowInd[j]] < resu[rowInd[j - 1]] + 1) {
          changed = true
          resu[rowInd[j]] = resu[rowInd[j - 1]] + 1
        }
      }
    }
  }
  return changed
}

// another

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const matrixRankTransform = function (matrix) {
  const r = matrix.length,
    c = matrix[0].length;
  const t = r * c;
  const arr = Array(t);
  const root = Array(t + 1);
  const rk = Array(t + 1).fill(0);
  const find = (a) => {
    let ra = root[a];
    if (ra == a) return a;
    return (root[a] = find(ra));
  };
  const union = (a, b) => {
    let ra = find(a);
    let rb = find(b);
    if (ra !== rb) {
      if (rk[ra] > rk[rb]) root[rb] = ra;
      else root[ra] = rb;
    }
  };
  let k = 0;
  const ans = Array(r)
    .fill(0)
    .map(() => Array(c));
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      arr[k] = [matrix[i][j], i, j];
      root[k] = k;
      ++k;
    }
  }
  root[k] = k;
  arr.sort((a, b) => a[0] - b[0]);
  const X = Array(r)
    .fill(0)
    .map(() => [-Infinity, t]);
  const Y = Array(c)
    .fill(0)
    .map(() => [-Infinity, t]);
  for (let i = 0; i < t; ++i) {
    const [v, x, y] = arr[i];
    const id = x * c + y;
    const [xv, rx] = X[x],
      [yv, ry] = Y[y];
    if (v > xv) rk[id] = rk[find(rx)] + 1;
    else root[id] = rx;
    if (v > yv) rk[find(id)] = Math.max(rk[find(id)], rk[find(ry)] + 1);
    else union(id, ry);
    X[x] = [v, id];
    Y[y] = [v, id];
  }
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      ans[i][j] = rk[find(i * c + j)];
    }
  }
  return ans;
};
