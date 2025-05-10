/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  const n = nums.length
  let sum = 0,
    k = 0
  const differenceArray = new Array(n + 1).fill(0)

  for (let index = 0; index < n; index++) {
    // Iterate through queries while current index of nums cannot equal zero
    while (sum + differenceArray[index] < nums[index]) {
      k++

      // Zero array isn't formed after all queries are processed
      if (k > queries.length) {
        return -1
      }
      const [left, right, val] = queries[k - 1]

      // Process start and end of range
      if (right >= index) {
        differenceArray[Math.max(left, index)] += val
        differenceArray[right + 1] -= val
      }
    }
    // Update prefix sum at current index
    sum += differenceArray[index]
  }
  return k
}


// another

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  if (nums.every((num) => num === 0)) return 0
  const n = nums.length
  const delta = new Array(n + 1).fill(0)

  for (let index = 0; index < queries.length; index++) {
    const query = queries[index]
    const l = query[0]
    const r = query[1]
    const diff = query[2]

    delta[l] += diff
    if (r + 1 < n) {
      delta[r + 1] -= diff
    }

    let curDiff = 0
    let success = true

    for (let i = 0; i < n; i++) {
      curDiff += delta[i]
      if (nums[i] > curDiff) {
        success = false
        break
      }
    }

    if (!success) continue
    return index + 1
  }
  return -1
}

