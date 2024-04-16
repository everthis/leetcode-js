function calcLcm(a, b) {
  let p = a * b

  let t = 0
  while (b) {
    t = b
    b = a % b
    a = t
  }

  return p / a
}

/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function (coins, k) {
  let n = coins.length

  let cnt = 0
  let lcm = 1
  let sgn = -1
  let cur = 0
  let res = 0

  let l = 1
  let r = 50000000000

  while (l <= r) {
    cur = Math.floor((l + r) / 2)
    cnt = 0
    bt(0)

    if (cnt >= k) {
      res = cur
      r = cur - 1
    } else {
      l = cur + 1
    }
  }

  return res
  
  function bt(i) {
    let bak = lcm
    lcm = calcLcm(lcm, coins[i])
    sgn = -sgn
    cnt += sgn * Math.floor(cur / lcm)

    ++i
    if (i < n) bt(i)

    lcm = bak
    sgn = -sgn
    if (i < n) bt(i)
  }
}
