class SegmentTree {
  constructor(n) {
    this.size = n
    this.segTree = Array(n * 2).fill(0)
  }
  update(index, val) {
    let n = this.size,
      idx = index + n
    this.segTree[idx] = Math.max(this.segTree[idx], val)
    idx = Math.floor(idx / 2)

    while (idx > 0) {
      this.segTree[idx] = Math.max(
        this.segTree[idx * 2],
        this.segTree[idx * 2 + 1],
      )
      idx = Math.floor(idx / 2)
    }
  }
  maxRange(left, right) {
    let n = this.size,
      max = 0
    let left_idx = left + n,
      right_idx = right + n
    while (left_idx <= right_idx) {
      if (left_idx % 2 === 1) max = Math.max(max, this.segTree[left_idx++])
      if (right_idx % 2 === 0) max = Math.max(max, this.segTree[right_idx--])
      left_idx = Math.floor(left_idx / 2)
      right_idx = Math.floor(right_idx / 2)
    }
    return max
  }
}


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[][]} queries
 * @return {number[]}
 */
const maximumSumQueries = function (nums1, nums2, queries) {
  let nums = [],
    n = nums1.length,
    indexMap = {}
  for (let i = 0; i < n; i++) {
    nums.push([nums1[i], nums2[i]])
    indexMap[nums2[i]] = 1
  }
  nums.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]))
  for (let [_x, y] of queries) {
    indexMap[y] = 1
  }
  let index = 0
  for (let value in indexMap) {
    indexMap[value] = index++ // assign a minimized index to each value
  }
  queries = queries
    .map(([x, y], i) => [x, y, i])
    .sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]))

  let m = queries.length,
    ans = Array(m)
  let segTree = new SegmentTree(index),
    numsIndex = 0
  for (let [x, y, queryIndex] of queries) {
    while (numsIndex < n && nums[numsIndex][0] >= x) {
      segTree.update(
        indexMap[nums[numsIndex][1]],
        nums[numsIndex][0] + nums[numsIndex][1],
      )
      numsIndex++
    }
    let max = segTree.maxRange(indexMap[y], index - 1)
    ans[queryIndex] = max === 0 ? -1 : max
  }
  return ans
}

