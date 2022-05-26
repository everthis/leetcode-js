/**
 * @param {number[]} A
 * @return {number}
 */
const bestRotation = function(A) {
  const N = A.length
  const bad = new Array(N).fill(0)
  for (let i = 0; i < N; ++i) {
    let left = (i - A[i] + 1 + N) % N
    let right = (i + 1) % N
    bad[left]--
    bad[right]++
    if (left > right) bad[0]--
  }

  let best = -N
  let ans = 0,
    cur = 0
  for (let i = 0; i < N; ++i) {
    cur += bad[i]
    if (cur > best) {
      best = cur
      ans = i
    }
  }
  return ans
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function(nums) {
  const n = nums.length
  const arr = Array(n).fill(0)
  for(let i = 0; i < n; i++) {
    arr[(i - nums[i] + 1 + n) % n] -= 1
  }
  let res = 0
  for(let i = 1; i < n; i++) {
    arr[i] += arr[i - 1] + 1
    if(arr[i] > arr[res]) res = i
  }
  return res
};


