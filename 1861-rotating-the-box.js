/**
 * @param {character[][]} box
 * @return {character[][]}
 */
const rotateTheBox = function(box) {
  const m = box.length, n = box[0].length
  const res = Array.from({ length: n }, () => Array(m).fill('.'))
  for(let i = 0; i < m; i++) {
    let j = n - 1
    let pos = j
    while(j >= 0) {
      if(box[i][j] === '*') {
        pos = j - 1
      } else if(box[i][j] === '#') {
        box[i][j] = '.'
        box[i][pos] = '#'
        res[pos][m - 1 - i] = '#'
        pos--
      }
      res[j][m - 1 - i] = box[i][j]
      j--
    }
    
  }
  return res
};
