/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
const maxRunTime = function(n, batteries) {
  n = BigInt(n)
  batteries = batteries.map(e => BigInt(e))
  const sum = batteries.reduce((ac, e) => ac + e, 0n)
  let l = 0n, r = sum / n
  while(l < r) {
    const mid = r - (r - l) / 2n
    if(valid(mid)) l = mid
    else r = mid - 1n
  }
  
  return l
  
  function valid(mid) {
    let curSum = 0n, target = mid * n
    for(const e of batteries) {
      curSum += e > mid ? mid : e
      if(curSum >= target) return true
    }
    return false
  }
};


// another


/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
  batteries.sort((a, b) => a - b)
  const sum = batteries.reduce((ac, e) => ac + BigInt(e), 0n)
  let hi = ~~(sum / BigInt(n)) + 1n,
    lo = 0n
  while (lo < hi) {
    let mid = ~~((lo + hi) / 2n)
    if (chk(mid)) {
      lo = mid + 1n
    } else {
      hi = mid
    }
  }

  return lo - 1n
  function chk(x) {
    let current = 0n
    let i = 0n
    for (let b of batteries) {
      if (i == BigInt(n)) break
      if (b > x) b = x
      if (b >= x - current) {
        i += 1n
        current = BigInt(b) - (x - current)
      } else {
        current += BigInt(b)
      }
    }

    return i == n
  }
}
