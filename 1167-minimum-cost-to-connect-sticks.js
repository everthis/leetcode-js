/**

You have some sticks with positive integer lengths.

You can connect any two sticks of lengths X and Y into
one stick by paying a cost of X + Y.  You perform this action until there is one stick remaining.

Return the minimum cost of connecting all the given sticks into one stick in this way.

Example 1:

Input: sticks = [2,4,3]
Output: 14
Example 2:

Input: sticks = [1,8,3,5]
Output: 30
 
Constraints:

1 <= sticks.length <= 10^4
1 <= sticks[i] <= 10^4

*/

/**
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function(sticks) {
  if (sticks.length < 1) return 0
  let size = sticks.length - 1
  let i = Math.floor(sticks.length / 2)
  for (; i >= 0; i--) {
    heapify(sticks, i, size)
  }
  let cost = 0
  while (size >= 1) {
    const temp = sticks[0]
    sticks[0] = sticks[size--]
    heapify(sticks, 0, size)
    sticks[0] = sticks[0] + temp
    cost += sticks[0]
    heapify(sticks, 0, size)
  }
  return cost
}
const heapify = (arr, index, size) => {
  let smallest = index
  let l = index * 2 + 1
  let r = index * 2 + 2
  if (l <= size && arr[l] < arr[smallest]) {
    smallest = l
  }
  if (r <= size && arr[r] < arr[smallest]) {
    smallest = r
  }
  if (smallest != index) {
    swap(arr, index, smallest)
    heapify(arr, smallest, size)
  }
}
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// another

/**
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function(sticks) {
  if (sticks.length === 1) return 0
  sticks.sort((a, b) => a - b)
  let sum = [],
    result = 0
  while (sticks.length || sum.length > 1) {
    let cur = 0
    for (let i = 0; i < 2; i++) {
      if (sticks[0] && (sum[0] === undefined || sticks[0] < sum[0])) {
        cur += sticks[0]
        sticks.shift()
      } else {
        cur += sum[0]
        sum.shift()
      }
    }
    sum.push(cur)
    result += cur
  }
  return result
}

// another

/**
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function(sticks) {
  sticks.sort((a, b) => a - b)
  const sums = []
  let result = 0
  if (sticks.length < 2) return result
  const getMin = () => {
    const stick = sticks.length ? sticks[0] : Infinity
    const sum = sums.length ? sums[0] : Infinity
    if (sum < stick) {
      return sums.shift()
    } else {
      return sticks.shift()
    }
  }
  while (sticks.length || sums.length > 1) {
    const tmp1 = getMin()
    const tmp2 = getMin()
    const curr = tmp1 + tmp2
    result += curr
    sums.push(curr)
  }
  return result
}


