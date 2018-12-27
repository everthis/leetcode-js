/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
    const rows = []
    const cols = []
    const rowNum = matrix.length
    const colNum = matrix[0].length
    for(let i = 0; i < rowNum; i++) {
      for(let j = 0; j < colNum; j++) {
        if(matrix[i][j] === 0) {
           rows.push(i)
           cols.push(j)
        }
      }
    }
    const mrows = rows.filter((el, idx, arr) => arr.indexOf(el) === idx)
    const mcols = cols.filter((el, idx, arr) => arr.indexOf(el) === idx)
    for(let i = 0; i < mrows.length; i++) {
      matrix[mrows[i]] = new Array(colNum).fill(0)
    }
    for(let j = 0; j < mcols.length; j++) {
      for(let k = 0; k < rowNum; k++) {
        matrix[k][mcols[j]] = 0
      }
    }
    return matrix
};
