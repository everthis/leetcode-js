/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const mostCompetitive = function (nums, k) {
  const res = new Array(k).fill(0)
  let start = -1
  let idx = 0
  for (let i = k; i > 0; i--) {
    let min = Number.MAX_VALUE
    for (let j = start + 1; j < nums.length - i + 1; j++) {
      if (nums[j] < min) {
        start = j
        min = nums[j]
      }
    }
    res[idx++] = min
  }
  return res
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const mostCompetitive = function (nums, k) {
  const stack = [],
    n = nums.length
  let i = 0
  while (i < n) {
    while (
      stack.length &&
      stack[stack.length - 1] > nums[i] &&
      n - i + stack.length > k
    )
      stack.pop()
    if (stack.length < k) stack.push(nums[i])
    i++
  }
  return stack
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const mostCompetitive = function (nums, k) {
  const n = nums.length, stack = []
  for(let i = 0; i < n; i++) {
    const ch = nums[i]
    while(
      stack.length &&
      ch < stack[stack.length - 1] &&
      stack.length + (n - 1 - i) >= k
    ) {
      stack.pop()
    }
    if(stack.length < k) stack.push(ch)
  }
  return stack
}

