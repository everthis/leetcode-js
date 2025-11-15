/**
 * @param {number[]} d
 * @param {number[]} r
 * @return {number}
 */
var minimumTime = function (d, r) {
  const [d0, d1] = d, [r0, r1] = r
  let low = d0 + d1, hi = 2 * low * 2
  const lcm = r0 * r1 / gcd(r0, r1)
  const {floor: flr} = Math

  while(low < hi) {
    const mid = low + flr((hi - low) / 2)
    if(isOK(mid)) {
      hi = mid
    } else low = mid + 1
  }

  return low

  function isOK(t) {
    const s0 = t - flr(t / r0), s1 = t - flr(t / r1)
    const total = t - flr(t / lcm)
    if(s0 >= d0 && s1 >= d1 && total >= d0 + d1) {
      return true
    }

    return false
  }
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}
