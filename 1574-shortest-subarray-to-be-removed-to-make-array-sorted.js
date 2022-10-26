/**
 * @param {number[]} arr
 * @return {number}
 */
const findLengthOfShortestSubarray = function (arr) {
  const n = arr.length
  let left = 0
  for(let i = 0; i < n - 1; i++) {
    if(arr[i] > arr[i+ 1]) {
      break
    }
    left = i + 1
  }

  let right = n - 1
  for(let i = n - 1; i > 0; i--) {
    if(arr[i] < arr[i - 1]) {
      break
    }
    right = i - 1
  }
  // console.log(left, right)
  if(left === n - 1) return 0

  let res = Math.min(n - 1 - left, right)
  let l = 0, r = right
  while(l <= left && r < n) {
    if(arr[l] <= arr[r]) {
      res = Math.min(res, r - 1 - l)
      l++
    } else {
      r++
    }
  }

  return res
}
