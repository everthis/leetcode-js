/**
 * @param {string} s
 * @param {number[]} order
 * @param {number} k
 * @return {number}
 */
var minTime = function (s, order, k) {
  const n = s.length

  function f(mid) {
    const st = s.split('')
    for (let i = 0; i < mid; i++) {
      st[order[i]] = '*'
    }

    let total = 0
    let count = 0
    for (const ch of st) {
      if (ch === '*') {
        total += (count * (count + 1)) / 2
        count = 0
      } else {
        count += 1
      }
    }
    if (count > 0) {
      total += (count * (count + 1)) / 2
    }

    const invalid = total
    const all_substrings = (n * (n + 1)) / 2
    const valid = all_substrings - invalid

    return valid >= k
  }

  let low = 0,
    high = n
  let res = -1
  while (low <= high) {
    const mid = (low + high) >> 1

    if (f(mid)) {
      res = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return res !== -1 ? res - 1 : res
}
