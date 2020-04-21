/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = function (binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions()
  let candidate = -1
  for (let r = 0, c = cols - 1; r < rows && c >= 0; ) {
    if (binaryMatrix.get(r, c) === 1) {
      candidate = c
      c--
    } else {
      r++
    }
  }
  return candidate
}
