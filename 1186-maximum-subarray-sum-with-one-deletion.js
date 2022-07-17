/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumSum = function (arr) {
  const n = arr.length
  let oneDel = 0, noDel = arr[0], res = arr[0]

  for(let i = 1; i < n; i++) {
    oneDel = Math.max(noDel, oneDel + arr[i])
    noDel = Math.max(arr[i], noDel + arr[i])
    res = Math.max(res, oneDel, noDel)
  }

  return res
}

// another

/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumSum = function (arr) {
  const n = arr.length
  let max = arr[0]
  const maxEndAt = Array(n), maxStartAt = Array(n)
  maxEndAt[0] = arr[0]
  for(let i = 1; i < n; i++) {
    maxEndAt[i] = Math.max(arr[i], maxEndAt[i - 1] + arr[i])
    max = Math.max(max, maxEndAt[i])
  }
  maxStartAt[n - 1] = arr[n - 1]
  for(let i = n - 2; i >= 0; i--) {
    maxStartAt[i] = Math.max(arr[i], maxStartAt[i + 1] + arr[i])
  }
  let res = Math.max(maxStartAt[0], maxEndAt[n - 1])
  for(let i = 1; i < n - 1; i++) {
    res = Math.max(max, res, maxEndAt[i - 1] + maxStartAt[i + 1])
  }
  return res
}
