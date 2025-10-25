/**
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var maxPower = function(stations, r, k) {
  let lo = 0, hi = Number.MAX_SAFE_INTEGER
  const { floor: flr, min } = Math
  const n = stations.length
  while(lo < hi) {
    const mid = hi - flr((hi - lo) / 2)
    if(isOk(stations.slice(0),k, mid)) lo = mid
    else hi = mid - 1
  }

  return lo

  function isOk(sc,k, m) {
    let sum = 0
    for(let i = 0; i < min(n, r); i++) {
        sum += sc[i]
    }
    for(let i = 0; i < n; i++) {
        if(i + r < n) sum += sc[i + r]
        if(i - r - 1 >= 0) sum -= sc[i - r - 1]
        if(sum >= m) continue
        const diff = m - sum
        if(k < diff) return false
        sc[min(n - 1, i + r)] += diff
        sum = m
        k -= diff
    }

    return true
  }

};
