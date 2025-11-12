/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxTotalValue = function (nums, k) {
  const n = nums.length
  const K = Math.floor(Math.log2(n)) + 1

  const mn = Array.from({ length: n }, () => Array(K + 1).fill(Infinity))
  const mx = Array.from({ length: n }, () => Array(K + 1).fill(-Infinity))

  for (let i = 0; i < n; i++) {
    mn[i][0] = nums[i]
    mx[i][0] = nums[i]
  }

  for (let kk = 1; kk <= K; kk++) {
    for (let i = 0; i + (1 << kk) - 1 < n; i++) {
      mn[i][kk] = Math.min(mn[i][kk - 1], mn[i + (1 << (kk - 1))][kk - 1])
      mx[i][kk] = Math.max(mx[i][kk - 1], mx[i + (1 << (kk - 1))][kk - 1])
    }
  }

  let lo = 0,
    hi = 2e9
  while (lo < hi) {
    const mid = hi - Math.floor((hi - lo) / 2)
    if (count_ge(mid) >= k) {
      lo = mid
    } else {
      hi = mid - 1
    }
  }
  const th = lo

  let ret_g = 0n
  let count_g = 0n
  for (let i = 0; i < n; i++) {
    let l = i,
      r = n - 1
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2)
      if (GetDiff(i, mid) > th) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    if (GetDiff(i, r) > th) {
      count_g += BigInt(n - r)
      for (let j = r; j < n; j++) {
        ret_g += BigInt(GetDiff(i, j))
      }
    }
  }

  const ret = ret_g + BigInt(th) * (BigInt(k) - count_g)

  return Number(ret)

  function GetDiff(L, R) {
    const length = R - L + 1
    const k = Math.floor(Math.log2(length))
    return (
      Math.max(mx[L][k], mx[R - (1 << k) + 1][k]) -
      Math.min(mn[L][k], mn[R - (1 << k) + 1][k])
    )
  }

  function count_ge(th) {
    let count = 0
    let j = 0
    for (let i = 0; i < n; i++) {
      while (j < n && GetDiff(i, j) < th) j++
      count += n - j
    }
    return count
  }
}
