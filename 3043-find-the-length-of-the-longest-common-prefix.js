/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
  let f = new Set()
  for (let i of arr1) {
    for (; i > 0; i = Math.floor(i / 10)) {
      f.add(i)
    }
  }
  let res = 0
  for (let i of arr2) {
    for (; i > 0; i = Math.floor(i / 10)) {
      if (f.has(i)) {
        res = Math.max(res, i.toString().length)
        break
      }
    }
  }
  return res
}
