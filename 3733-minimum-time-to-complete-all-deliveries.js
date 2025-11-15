/**
 * @param {number[]} d
 * @param {number[]} r
 * @return {number}
 */
var minimumTime = function (d, r) {
  let low = d[0] + d[1]
  let high = 2 * low * 2
  let res = high

  let lcm = (r[0] * r[1]) / gcd(r[0], r[1])

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if (isOK(mid)) {
      high = mid
    } else {
      low = mid + 1
    }
  }

  return low

  function gcd(a, b) {
    while (b !== 0) {
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }
  function isOK(time) {
    let slots1 = time - Math.floor(time / r[0])
    let slots2 = time - Math.floor(time / r[1])
    let total_slots = time - Math.floor(time / lcm)
    return slots1 >= d[0] && slots2 >= d[1] && total_slots >= d[0] + d[1]
  }
}
