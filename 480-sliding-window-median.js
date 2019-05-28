/*
 * @lc app=leetcode id=480 lang=javascript
 *
 * [480] Sliding Window Median
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const medianSlidingWindow = function(nums, k) {
  const window = nums.slice(0, k).sort((x, y) => x - y)
  const resultLen = nums.length - k + 1
  nums.push(0)

  function insert(arr, val) {
    let i = 0
    while (i < arr.length && arr[i] < val) {
      i++
    }
    arr.splice(i, 0, val)
  }

  const medians = []
  const rightIdx = (k / 2) >>> 0
  const leftIdx = k + ~rightIdx
  for (let i = 0; i < resultLen; i++) {
    medians.push((window[leftIdx] + window[rightIdx]) / 2)
    window.splice(window.indexOf(nums[i]), 1)
    insert(window, nums[k + i])
  }
  return medians
}

// another

const medianSlidingWindow = function(nums, k) {
  let pq = []
  for (let i = 0; i < k; i++) {
    insert(nums[i])
  }
  let res = []
  res.push(findMid())
  for (let i = k; i < nums.length; i++) {
    remove(nums[i - k])
    insert(nums[i])
    res.push(findMid())
  }
  return res
  function findMid() {
    let mid = (pq.length - 1) / 2
    return (pq[Math.ceil(mid)] + pq[Math.floor(mid)]) / 2
  }
  function insert(n) {
    if (pq.length === 0 || pq[pq.length - 1] <= n) {
      pq.push(n)
    } else {
      let idx = bsEnd(pq, n)
      pq.splice(idx, 0, n)
    }
  }
  function bsEnd(arr, n) {
    let lo = 0,
      hi = arr.length - 1
    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2)
      if (arr[mid] < n) lo = mid + 1
      else hi = mid
    }
    return hi
  }
  function remove(n) {
    let idx = bsEnd(pq, n)
    pq.splice(idx, 1)
  }
}
