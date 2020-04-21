/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
const search = function (reader, target) {
  let left = 0,
    right = 1
  while (reader.get(right) < target) {
    left = right
    right <<= 1
  }
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (reader.get(mid) === target) return mid
    if (reader.get(mid) > target) right = mid - 1
    else left = mid + 1
  }
  return -1
}
