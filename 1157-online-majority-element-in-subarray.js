/**
 * @param {number[]} arr
 */
const MajorityChecker = function(arr) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) map.set(arr[i], [i])
    else map.get(arr[i]).push(i)
  }
  this.pos = map
  this.arr = arr
}

function lbs(arr, val) {
  let lo = 0
  let hi = arr.length - 1
  if (arr[0] >= val) return 0
  else if (arr[hi] < val) return Infinity
  let mid
  while (hi - lo > 1) {
    mid = (hi + lo) >> 1
    if (arr[mid] === val) return mid
    else if (arr[mid] < val) lo = mid
    else if (arr[mid] > val) hi = mid
  }
  return hi
}

function rbs(arr, val) {
  let lo = 0
  let hi = arr.length - 1
  if (arr[hi] <= val) return hi
  else if (arr[lo] > val) return -Infinity
  let mid
  while (hi - lo > 1) {
    mid = (hi + lo) >> 1
    if (arr[mid] === val) return mid
    else if (arr[mid] < val) lo = mid
    else if (arr[mid] > val) hi = mid
  }
  return lo
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
  const { arr, pos } = this
  let c = 20
  while (c--) {
    const idx = left + Math.floor(Math.random() * (right - left + 1))
    const sort = pos.get(arr[idx])
    const lidx = lbs(sort, left)
    const ridx = rbs(sort, right)
    if (ridx - lidx + 1 >= threshold) return arr[idx]
  }
  return -1
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
