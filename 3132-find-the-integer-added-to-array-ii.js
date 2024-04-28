/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums1.length - 1; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      const [flag, value] = judgeEqual(nums1, nums2, i, j)
      if (flag && min > value) {
        min = value
      }
    }
  }
  return min
}

function judgeEqual(nums1, nums2, i, j) {
  let m = 0
  let n = 0
  let flag = false
  let value = 0
  while (m < nums1.length) {
    if (m === i || m === j) {
      m++
      continue
    }
    if (!flag) {
      value = nums2[n] - nums1[m]
      m++
      n++
      flag = true
      continue
    }
    if (nums2[n] - nums1[m] !== value) {
      return [false, 0]
    }
    m++
    n++
  }
  return [true, value]
}
