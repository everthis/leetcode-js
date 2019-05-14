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
