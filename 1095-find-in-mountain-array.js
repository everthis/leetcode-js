/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *
 *     @param {integer} index
 *     @return {integer}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {integer}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
const findInMountainArray = function(target, mountainArr) {
  const p = findPeak(mountainArr)
  if (mountainArr.get(p) === target) {
    return p
  }
  const left = binarySeach(mountainArr, 0, p, target, 'asc')
  if (left > -1) {
    return left
  }
  return binarySeach(mountainArr, p + 1, mountainArr.length(), target, 'dsc')
}

function findPeak(arr) {
  let left = 0
  let right = arr.length()
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (arr.get(mid) < arr.get(mid + 1)) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

function binarySeach(mountainArr, start, end, target, order) {
  let left = start
  let right = end
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (target === mountainArr.get(mid)) {
      return mid
    } else if (
      (target > mountainArr.get(mid) && order === 'asc') ||
      (target < mountainArr.get(mid) && order === 'dsc')
    ) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return -1
}
