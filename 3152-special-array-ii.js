/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  let n = nums.length
  let sameParity = new Array(n - 1).fill(false)


  for (let i = 0; i < n - 1; ++i) {
    if (nums[i] % 2 === nums[i + 1] % 2) {
      sameParity[i] = true
    }
  }


  let prefixSameParity = new Array(n).fill(0)
  for (let i = 1; i < n; ++i) {
    prefixSameParity[i] = prefixSameParity[i - 1] + (sameParity[i - 1] ? 1 : 0)
  }

  let res = []
  for (const query of queries) {
    let start = query[0]
    let end = query[1]
    if (start === end) {
      // A single element subarray is always special
      res.push(true)
    } else {
      if (prefixSameParity[end] - prefixSameParity[start] > 0) {
        res.push(false)
      } else {
        res.push(true)
      }
    }
  }

  return res
}
