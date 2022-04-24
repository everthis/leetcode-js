/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays = function(bloomDay, m, k) {
  const n = bloomDay.length
  let l = -1, r = Math.max(...bloomDay)
  while(l < r) {
    const mid = l + Math.floor((r - l) / 2)
    if(valid(mid)) r = mid
    else l = mid + 1
  }
  return valid(l) ? l : -1

  function valid(mid) {
    let res = 0, cur = 0
    for (let i = 0; i < n; i++) {
      const e = bloomDay[i]
      if(e <= mid) {
        cur++
        if(cur >= k) {
          res++
          cur = 0
        }
      } else {
        cur = 0
      }
    }
    return res >= m
  }
};
