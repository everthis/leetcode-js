/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
const countShips = function (sea, topRight, bottomLeft) {
  let numShips = 0
  const stack = [[topRight, bottomLeft]]
  while (stack.length > 0) {
    const [tR, bL] = stack.pop()
    if (!sea.hasShips(tR, bL)) continue
    const [right, top] = tR
    const [left, bottom] = bL
    if (right === left && bottom === top) {
      numShips++
      continue
    }
    const xCoord = Math.floor((right + left) / 2)
    const yCoord = Math.floor((top + bottom) / 2)
    stack.push([tR, [xCoord + 1, yCoord + 1]]) // top right
    stack.push([
      [xCoord, top],
      [left, yCoord + 1],
    ]) // top left
    stack.push([[xCoord, yCoord], bL]) // bottom left
    stack.push([
      [right, yCoord],
      [xCoord + 1, bottom],
    ]) // bottom right
  }
  return numShips
}
