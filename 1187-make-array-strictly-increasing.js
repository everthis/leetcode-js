/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const makeArrayIncreasing = function(arr1, arr2) {
  arr2.sort((a, b) => a - b)
  let arr3 = [arr2[0]]
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > arr2[i - 1]) {
      arr3.push(arr2[i])
    }
  }
  arr2 = arr3
  let n = arr1.length
  let indexMap = new Array(n * 2 + 2)
  for (let i = 0; i < n; i++) {
    let ai = arr1[i]
    let li = findLarger(arr2, ai)
    indexMap[i * 2] = li
    indexMap[i * 2 + 1] = arr2[li - 1] === ai ? li - 2 : li - 1
  }
  indexMap[n * 2] = arr2.length
  indexMap[n * 2 + 1] = arr2.length - 1
  let dp = new Array(n + 1)
  let MaxNum = 1000000000 + 1
  dp[0] = 0
  for (let i = 1; i < n + 1; i++) {
    let min = i
    let ai = i === n ? MaxNum : arr1[i]
    for (let j = 0; j < i; j++) {
      if (dp[j] == -1 || ai <= arr1[j]) {
        continue
      }
      if (indexMap[i * 2 + 1] - indexMap[j * 2] + 1 < i - j - 1) continue
      min = Math.min(min, dp[j] + i - j - 1)
    }
    if (min === i) {
      if (indexMap[i * 2 + 1] + 1 < i) {
        min = -1
      }
    }
    dp[i] = min
  }
  return dp[n]
}
const findLarger = function(arr, a) {
  if (a > arr[arr.length - 1]) return arr.length
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    let mid = (l + r) >> 1
    if (arr[mid] <= a) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}
