/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const n = nums.length
  let res = 0
  const visited = new Array(n).fill(false)
  const arr = nums.map((p, i) => [digitSum(p), p, i])
  arr.sort((a, b) => a[0] - b[0] || a[1] - b[1])

  for (let i = 0; i < n; i++) {
    if (visited[i] || arr[i][2] === i) {
      continue
    }
    let length = 0
    let j = i
    while (!visited[j]) {
      visited[j] = true
      j = arr[j][2]
      length++
    }
    if (length > 1) {
      res += length - 1
    }
  }
  return res
}

function digitSum(n) {
  return String(n)
    .split('')
    .reduce((sum, d) => sum + parseInt(d), 0)
}
