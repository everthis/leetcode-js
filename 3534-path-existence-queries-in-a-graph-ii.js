/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function (n, nums, maxDiff, queries) {
  const sortedQueries = queries
  const sortedIndices = Array.from({ length: n }, (_, i) => i)
  const position = Array(n).fill(0)
  const values = Array(n).fill(0)

  sortedIndices.sort((a, b) => nums[a] - nums[b])

  for (let i = 0; i < n; ++i) {
    position[sortedIndices[i]] = i
    values[i] = nums[sortedIndices[i]]
  }

  const reachableIndex = Array(n).fill(0)
  let j = 0
  for (let i = 0; i < n; ++i) {
    if (j < i) j = i
    while (j + 1 < n && values[j + 1] - values[i] <= maxDiff) ++j
    reachableIndex[i] = j
  }

  let maxLog = 1
  while (1 << maxLog < n) ++maxLog

  const upTable = Array.from({ length: maxLog }, () => Array(n).fill(0))
  upTable[0] = reachableIndex.slice()

  for (let k = 1; k < maxLog; ++k) {
    for (let i = 0; i < n; ++i) {
      upTable[k][i] = upTable[k - 1][upTable[k - 1][i]]
    }
  }

  const res = []

  for (const query of queries) {
    let [start, end] = query
    if (start === end) {
      res.push(0)
      continue
    }

    let startPos = position[start],
      endPos = position[end]
    if (startPos > endPos) [startPos, endPos] = [endPos, startPos]

    if (Math.abs(nums[start] - nums[end]) <= maxDiff) {
      res.push(1)
      continue
    }

    if (reachableIndex[startPos] < endPos) {
      let current = startPos,
        jumpCount = 0
      for (let k = maxLog - 1; k >= 0; --k) {
        if (upTable[k][current] < endPos) {
          if (upTable[k][current] === current) break
          current = upTable[k][current]
          jumpCount += 1 << k
        }
      }
      if (reachableIndex[current] >= endPos) res.push(jumpCount + 1)
      else res.push(-1)
    } else {
      res.push(1)
    }
  }

  return res
}
