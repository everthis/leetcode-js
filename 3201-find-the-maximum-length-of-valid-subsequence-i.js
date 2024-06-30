/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  const n = nums.length
  const arr = new Array(n)
  let zeroCnt = 0
  let firstZeroIdx = -1
  let firstOneIdx = -1
  for (let i = 0; i < n; i++) {
    arr[i] = nums[i] % 2
    if (arr[i] === 0) {
      if (firstZeroIdx < 0) {
        firstZeroIdx = i
      }
      zeroCnt++
    } else {
      if (firstOneIdx < 0) {
        firstOneIdx = i
      }
    }
  }
  const oneCnt = n - zeroCnt
  // Assume the subsequence's modulo is 0
  let res = Math.max(zeroCnt, oneCnt)
  // Modulo is 1
  if (firstZeroIdx >= 0) {
    let tmp = 1
    let last = 0
    for (let i = firstZeroIdx + 1; i < n; i++) {
      if ((last ^ arr[i]) === 1) {
        tmp++
        last = arr[i]
      }
    }
    res = Math.max(res, tmp)
  }
  if (firstOneIdx >= 0) {
    let tmp = 1
    let last = 1
    for (let i = firstOneIdx + 1; i < n; i++) {
      if ((last ^ arr[i]) === 1) {
        tmp++
        last = arr[i]
      }
    }
    res = Math.max(res, tmp)
  }
  return res
}
