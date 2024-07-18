/**
 * @param {number[][]} grid
 * @return {number}
 */
const minimumSum = function(grid) {
  const m = grid.length, n = grid[0].length
  let res = Infinity
//   case 1
/*
1 | 2 | 3
*/
for(let i = 0; i < n - 2; i++) {
  const one = calc(0, m - 1, 0, i, grid)
  for(let j = i + 1; j < n - 1; j++) {
    const two = calc(0, m - 1, i + 1, j, grid)
    const three = calc(0, m - 1, j + 1, n - 1, grid)
    res = Math.min(res, one + two + three)
  }
}


//   case 2
/*
1
-
2
-
3
*/
for(let i = 0; i < m - 2; i++) {
    const one = calc(0, i, 0, n - 1, grid)
    for(let j = i + 1; j < m - 1; j++) {
      const two = calc(i + 1, j, 0, n - 1, grid)
      const three = calc(j + 1, m - 1, 0, n - 1, grid)
      res = Math.min(res, one + two + three)
    }
}


//   case 3
/*
2 | 3
-----
  1
*/
for(let i = m - 1; i >= 1; i--) {
  const one = calc(i, m - 1, 0, n - 1, grid)
  for(let j = 0; j < n - 1; j++) {
    const two = calc(0, i - 1, 0, j, grid)
    const three = calc(0, i - 1, j + 1, n - 1, grid)
    res = Math.min(res, one + two + three)
  }

}


//   case 4
/*
2 |
--| 1
3 |
*/
for(let i = n - 1; i >= 1; i--) {
    const one = calc(0, m - 1, i, n - 1, grid)
    for(let j = 0; j < m - 1; j++) {
      const two = calc(0, j, 0, i - 1, grid)
      const three = calc(j + 1, m - 1, 0, i - 1, grid)
      res = Math.min(res, one + two + three)
    }
  }


//   case 5
/*
  1  
-----
2 | 3
*/
for(let i = 0; i < m - 1; i++) {
    const one = calc(0, i, 0, n - 1, grid)
    for(let j = 0; j < n - 1; j++) {
      const two = calc(i + 1, m - 1, 0, j, grid)
      const three = calc(i + 1, m - 1, j + 1, n - 1, grid)
      res = Math.min(res, one + two + three)
    }
  
}


//   case 6
/*
   | 2
 1 |--
   | 3
*/
for(let j = 0; j < n - 1; j++) {
    const one = calc(0, m - 1, 0, j, grid)
    for(let i = 0; i < m - 1; i++) {
      const two = calc(0, i, j + 1, n - 1, grid)
      const three = calc(i + 1, m - 1, j + 1, n - 1, grid)
      res = Math.min(res, one + two + three)
    }
}

  return res
};

function calc(rs, re, cs, ce, grid) {

    let rmin = Infinity, rmax = -Infinity, cmin = Infinity, cmax = -Infinity
    for(let i = rs; i <= re; i++) {
        for(let j = cs; j <= ce; j++) {
        if(grid[i][j] === 1) {
            rmin = Math.min(rmin, i)
            rmax = Math.max(rmax, i)
            cmin = Math.min(cmin, j)
            cmax = Math.max(cmax, j)
        }
        }
    }
    return (rmax - rmin + 1) * (cmax - cmin + 1)
}
