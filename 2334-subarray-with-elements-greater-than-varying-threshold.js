/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const validSubarraySize = function (nums, threshold) {
  const n = nums.length

  let stk = []
  // used for storing next and previous smaller elements
  const nextS = Array(n).fill(-1)
  const prevS = Array(n).fill(-1)

  // firstly, let's find out the next smaller elements
  for (let i = 0; i < n; i++) {
    while (stk.length && nums[i] < nums[back(stk)]) {
      nextS[back(stk)] = i
      stk.pop()
    }
    stk.push(i)
  }

  stk = []

  // find out the previous smaller elements for each index
  for (let i = n - 1; i >= 0; i--) {
    while (stk.length && nums[i] < nums[back(stk)]) {
      prevS[back(stk)] = i
      stk.pop()
    }
    stk.push(i)
  }

  for (let i = 0; i < n; i++) {
    // left boundary
    const left = prevS[i]
    // right boundary
    const right = nextS[i] == -1 ? n : nextS[i]
    // length of subarray formed with nums[i] as minimum
    const len = right - left - 1

    if (nums[i] > threshold / len) return len
  }

  return -1

  function back(arr) {
    return arr[arr.length - 1]
  }
}
