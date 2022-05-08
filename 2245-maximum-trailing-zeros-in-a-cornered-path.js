/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxTrailingZeros = function maxTrailingZeros(grid) {
  const m = grid.length
  const n = grid[0].length

  const factors = (num, k) => {
    let sum = 0
    while (!(num % k)) {
      num /= k
      sum += 1
    }

    return sum
  }

  const getRowPrefixSum = (k) => {
    const rowPrefixSum = []
    for (let i = 0; i < m; i++) {
      rowPrefixSum.push([factors(grid[i][0], k)])
      for (let j = 1; j < n; j++) {
        rowPrefixSum[i][j] = factors(grid[i][j], k) + rowPrefixSum[i][j - 1]
      }
    }

    return rowPrefixSum
  }

  const getColPrefixSum = (k) => {
    const colPrefixSum = [[factors(grid[0][0], k)]]
    for (let i = 1; i < m; i++) {
      colPrefixSum.push([factors(grid[i][0], k) + colPrefixSum[i - 1][0]])
    }

    for (let j = 1; j < n; j++) {
      colPrefixSum[0][j] = factors(grid[0][j], k)
      for (let i = 1; i < m; i++) {
        colPrefixSum[i][j] = factors(grid[i][j], k) + colPrefixSum[i - 1][j]
      }
    }

    return colPrefixSum
  }

  const twoRow = getRowPrefixSum(2)
  const fiveRow = getRowPrefixSum(5)
  const twoCol = getColPrefixSum(2)
  const fiveCol = getColPrefixSum(5)

  let max = 0

  // now check every cell in the whole grid
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const twoLeft = twoRow[i][j]
      const twoRight = twoRow[i][n - 1] - (j && twoRow[i][j - 1])
      const twoUp = i && twoCol[i - 1][j]
      const twoDown = twoCol[m - 1][j] - twoCol[i][j]

      const fiveLeft = fiveRow[i][j]
      const fiveRight = fiveRow[i][n - 1] - (j && fiveRow[i][j - 1])
      const fiveUp = i && fiveCol[i - 1][j]
      const fiveDown = fiveCol[m - 1][j] - fiveCol[i][j]

      const corneredPaths = [
        Math.min(twoLeft + twoUp, fiveLeft + fiveUp),
        Math.min(twoLeft + twoDown, fiveLeft + fiveDown),
        Math.min(twoRight + twoUp, fiveRight + fiveUp),
        Math.min(twoRight + twoDown, fiveRight + fiveDown),
      ]

      const trailingZeros = Math.max(...corneredPaths)

      if (trailingZeros > max) {
        max = trailingZeros
      }
    }
  }

  return max
}

// another

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxTrailingZeros = function(grid) {
    const g = grid
    const m = g.length;
    const n = g[0].length;
    const ta = [...Array(m)].map(i => Array(n).fill(1));
    const tb = [...Array(m)].map(i => Array(n).fill(1));
    const tc = [...Array(m)].map(i => Array(n).fill(1));
    const td = [...Array(m)].map(i => Array(n).fill(1));
    
    const c52 = (s) => {
        let c5 = 0;
        let c2 = 0;
        while (s % 2 === 0) {
            s = s / 2;
            c2++;
        }
        while (s % 5 === 0) {
            s = s / 5;
            c5++;
        }
        return [c5, c2];
    }
    
    const c10 = ([c5, c2]) => {
        return Math.min(c5, c2);
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ta[i][j] = (j === 0) ? c52(g[i][j]) : [c52(g[i][j])[0] + ta[i][j-1][0], c52(g[i][j])[1] + ta[i][j-1][1]];
            tb[i][j] = (i === 0) ? c52(g[i][j]) :  [c52(g[i][j])[0] + tb[i-1][j][0], c52(g[i][j])[1] + tb[i-1][j][1]];
        }
    }
    
    for (let i = m-1; i >= 0; i--) {
        for (let j = n-1; j >= 0; j--) {
            tc[i][j] = (j === n-1) ? c52(g[i][j]) : [c52(g[i][j])[0] + tc[i][j+1][0], c52(g[i][j])[1] + tc[i][j+1][1]];  // : ctz(hg(g[i][j]) * tc[i][j+1][0], tc[i][j+1][1]); // hg(g[i][j]) * tc[i][j+1];
            td[i][j] = (i === m-1) ? c52(g[i][j]) : [c52(g[i][j])[0] + td[i+1][j][0], c52(g[i][j])[1] + td[i+1][j][1]]; // : ctz(hg(g[i][j]) * td[i+1][j][0], td[i+1][j][1]); // hg(g[i][j]) * td[i+1][j];
        }
    }
    
    let ret = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let s1 = i === 0 ? c10(ta[i][j]) : c10([ta[i][j][0] + tb[i-1][j][0], ta[i][j][1] + tb[i-1][j][1]]);
            let s2 = i === m - 1 ? c10(ta[i][j]) : c10([ta[i][j][0] + td[i+1][j][0], ta[i][j][1] + td[i+1][j][1]]);            
            let s3 = i === 0 ? c10(tc[i][j]) : c10([tc[i][j][0] + tb[i-1][j][0], tc[i][j][1] + tb[i-1][j][1]]);
            let s4 = i === m - 1 ? c10(tc[i][j]) : c10([tc[i][j][0] + td[i+1][j][0], tc[i][j][1] + td[i+1][j][1]]); 
            ret = Math.max(ret, s1, s2, s3, s4);
        }
    }
    return ret;
};
