/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
const maxSumRangeQuery = function (nums, requests) {
  let res = 0
  const mod = 10 ** 9 + 7,
    n = nums.length
  const count = Array(n).fill(0)
  for (let r of requests) {
    count[r[0]] += 1
    if (r[1] + 1 < n) count[r[1] + 1] -= 1
  }
  for (let i = 1; i < n; i++) count[i] += count[i - 1]
  nums.sort((a, b) => a - b)
  count.sort((a, b) => a - b)
  for (let i = 0; i < n; ++i) res = (res + nums[i] * count[i]) % mod
  return res
}

// another

/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
const maxSumRangeQuery = function (nums, requests) {
  const n = nums.length, arr = Array(n + 1).fill(0)
  for(let [s, e] of requests) {
    arr[s] += 1
    arr[e + 1] -= 1
  }
  for(let i = 0, cur = 0; i < n; i++) {
    cur += arr[i]
    arr[i] = cur
  }
  nums.sort((a, b) => b - a)
  arr.sort((a, b) => b - a)
  const mod = 1e9 + 7
  let res = 0
  for(let i = 0; i < n; i++) {
    if (arr[i] <= 0) break
    res = (res + nums[i] * arr[i]) % mod
  }
  return res
}
