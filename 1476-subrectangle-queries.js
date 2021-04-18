/**
 * @param {number[][]} rectangle
 */
const SubrectangleQueries = function(rectangle) {
  this.rect = rectangle
  this.ops = []
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
  this.ops.push([row1, col1, row2, col2, newValue])
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
  for(let i = this.ops.length - 1; i >= 0; i--) {
    const op = this.ops[i]
    if(op[0] <= row && op[1] <= col && row <= op[2] && col <= op[3]) return op[4]
  }
  return this.rect[row][col]
};

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
