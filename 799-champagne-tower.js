/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
const champagneTower = function(poured, query_row, query_glass) {
  let curRow = [poured]
  for(let i = 0; i <= query_row; i++) {
    const nxtRow = Array(i + 2).fill(0)
    for(let j = 0; j <= i; j++) {
      if(curRow[j] > 1) {
        nxtRow[j] += (curRow[j] - 1) / 2
        nxtRow[j + 1] += (curRow[j] - 1) / 2
        curRow[j] = 1
      }
    }
    if(i !== query_row) curRow = nxtRow
  }
  
  return curRow[query_glass]
};
