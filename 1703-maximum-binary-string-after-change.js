/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minMoves = function (nums, k) {
  const pos = [],
    pre = []
  const n = nums.length,
    { min, floor: fl } = Math
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) pos.push(i)
  }
  let res = Infinity

  pre.push(0)
  for (let i = 0, len = pos.length; i < len; i++) {
    pre.push(pre[i] + pos[i])
  }

  for (let i = fl(k / 2), limit = pos.length - fl((k - 1) / 2); i <limit; i++) {
    const lcnt = fl(k / 2),
      rcnt = fl((k - 1) / 2)
    let current =
      lcnt * pos[i] - (pre[i] - pre[i - lcnt]) - (lcnt * (lcnt + 1)) / 2
    current +=
      pre[i + 1 + rcnt] - pre[i + 1] - rcnt * pos[i] - (rcnt * (rcnt + 1)) / 2

    res = min(res, current)
  }
  return res
}

// another


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minMoves = function (nums, k) {
  if (k === 1) return 0
  let n = 0
  const pos = []
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i]) pos.push(i - n++)
  }
  const sums = []
  sums[0] = pos[0]
  for (let i = 1; i < n; ++i) sums[i] = pos[i] + sums[i - 1]
  let res = Number.MAX_VALUE
  let l = (k / 2) >> 0,
    r = k - l - 1
  for (let i = 0; i + k <= n; ++i) {
    const m = i + ((k / 2) >>> 0)
    const cur =
      pos[m] * l -
      (sums[m - 1] - sums[i] + pos[i]) -
      pos[m] * r +
      sums[i + k - 1] -
      sums[m]
    res = Math.min(cur, res)
  }
  return res
}
