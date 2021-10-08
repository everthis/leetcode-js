/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const waysToPartition = function (nums, k) {
  const n = nums.length, pre = Array(n).fill(0), suf = Array(n).fill(0)
  pre[0] = nums[0], suf[n - 1] = nums[n - 1]
  for(let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] + nums[i]
    suf[n - 1 - i] = suf[n - i] + nums[n - 1 - i]
  }
  const sum = nums.reduce((ac, e) => ac + e, 0)
  let res = 0
  for(let i = 0; i < n - 1; i++) {
    if(pre[i] === suf[i + 1]) res++
  }
  const cnt = new Map()
  const arr = Array(n).fill(0)
  for(let i = 0; i < n; i++) {
    const newSum = sum - nums[i] + k
    if(newSum % 2 === 0) arr[i] += (cnt.get(newSum / 2) || 0)
    cnt.set(pre[i], (cnt.get(pre[i]) || 0) + 1)
  }
  cnt.clear()
  for(let i = n - 1; i >= 0; i--) {
    const newSum = sum - nums[i] + k
    if(newSum % 2 === 0) arr[i] += (cnt.get(newSum / 2) || 0)
    cnt.set(suf[i], (cnt.get(suf[i]) || 0) + 1)
  }
  
  for(let e of arr) {
    if(e > res) res = e
  }
  
  return res
}


// another


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const waysToPartition = function (nums, k) {
  const n = nums.length
  const pref = Array(n).fill(0),
    suff = Array(n).fill(0)
  pref[0] = nums[0]
  suff[n - 1] = nums[n - 1]
  for (let i = 1; i < n; ++i) {
    pref[i] = pref[i - 1] + nums[i]
    suff[n - 1 - i] = suff[n - i] + nums[n - 1 - i]
  }
  let ans = 0
  const left = {},
    right = {}

  for (let i = 0; i < n - 1; ++i) {
    const delta = pref[i] - suff[i + 1]
    if (right[delta] == null) right[delta] = 0
    right[delta]++
  }

  if (right[0]) ans = right[0]
  for (let i = 0; i < n; ++i) {
    //find the number of pivot indexes when nums[i] is changed to k
    let curr = 0,
      diff = k - nums[i]
    if (left[diff]) curr += left[diff]
    if (right[-diff]) curr += right[-diff]

    //update answer
    ans = Math.max(ans, curr)

    //transfer the current element from right to left
    if (i < n - 1) {
      let dd = pref[i] - suff[i + 1]
      if(left[dd] == null) left[dd] = 0
      if(right[dd] == null) right[dd] = 0
      left[dd]++
      right[dd]--
      if (right[dd] == 0) delete right[dd]
    }
  }
  return ans
}
