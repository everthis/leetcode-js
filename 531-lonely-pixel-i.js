/**
 * @param {character[][]} picture
 * @return {number}
 */
const findLonelyPixel = function(picture) {
  if(picture == null || picture[0].length === 0) return 0
  const rows = picture.length
  const cols = picture[0].length
  const r = new Array(rows).fill(0)
  const c = new Array(cols).fill(0)
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      r[i] += picture[i][j] === 'B' ? 1 : 0
      c[j] += picture[i][j] === 'B' ? 1 : 0
    }
  }
  let res = 0
  for(let i = 0; i < rows; i++) {
    if(r[i] === 1) {
      for(let j = 0; j < cols; j++) {
        if(c[j] === 1 && picture[i][j] === 'B') {
          res++
        }
      }      
    }
  }
  return res
};
