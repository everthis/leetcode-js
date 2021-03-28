/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
    const res = []
    let dir = 'top'
    while(matrix.length) {
        switch (dir) {
            case 'top':
                res.push(...matrix.shift())
                dir = 'right'
                break;
            case 'right':
                for(let i = 0; i < matrix.length - 1; ) {
                    res.push(matrix[i].pop())
                    if (matrix[i].length === 0) {
                        matrix.splice(i, 1)
                    } else {
                        i++
                    }
                }
                dir = 'bottom'
                break;
            case 'bottom':
                res.push(...matrix.pop().reverse())
                dir = 'left'
                break;
            case 'left':
                for(let i = matrix.length - 1; i >= 0; i--) {
                    res.push(matrix[i].shift())
                    if (matrix[i].length === 0) {
                        matrix.splice(i, 1)
                    }
                }
                dir = 'top'
                break;
        }
    }
    return res
};

// another

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  const res = [], m = matrix.length, n = matrix[0].length
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let di = 0, i = 0, j = 0, nx = 0, ny = 1
  while(true) {
    res.push(matrix[i][j])
    matrix[i][j] = Infinity
    if(chk(i, j)) {
      if(di === 0 && (j + 1 >= n || matrix[i][j + 1] === Infinity)) {
        i++
        di = 1
      } else if(di === 1 && (i + 1 >= m || matrix[i + 1][j] === Infinity)) {
        j--
        di = 2
      } else if(di === 2 && (j - 1 < 0 || matrix[i][j - 1] === Infinity)) {
        i--
        di = 3
      } else if(di === 3 && (i - 1 < 0 || matrix[i - 1][j] === Infinity)) {
        j++
        di = 0
      } else {
        i += dirs[di][0]
        j += dirs[di][1]
      }
    } else break
  }
  return res

  function chk(i, j) {
    for(let dir of dirs) {
      const nx = i + dir[0], ny = j + dir[1]
      if(nx >= 0 && nx < matrix.length && ny >= 0 && ny < matrix[0].length && matrix[nx][ny] !== Infinity) return true
    }
    return false
  } 
};
  

