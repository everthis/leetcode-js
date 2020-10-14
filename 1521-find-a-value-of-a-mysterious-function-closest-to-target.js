/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const closestToTarget = function (arr, target) {
  let res = Infinity
  let set = new Set()
  for (let i = 0; i < arr.length; i++) {
    const set2 = new Set()
    for (let j of set) {
      set2.add(j & arr[i])
    }
    set2.add(arr[i])
    for (let j of set2) {
      res = Math.min(res, Math.abs(j - target))
    }
    set = set2
  }
  return res
}
