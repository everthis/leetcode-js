//////////////////////////////////////////////Template/////////////////////////////////////////////////////////////
function Bisect() {
  return { insort_right, insort_left, bisect_left, bisect_right }
  function insort_right(a, x, lo = 0, hi = null) {
    lo = bisect_right(a, x, lo, hi)
    a.splice(lo, 0, x)
  }
  function bisect_right(a, x, lo = 0, hi = null) {
    // > upper_bound
    if (lo < 0) throw new Error('lo must be non-negative')
    if (hi == null) hi = a.length
    while (lo < hi) {
      let mid = parseInt((lo + hi) / 2)
      x < a[mid] ? (hi = mid) : (lo = mid + 1)
    }
    return lo
  }
  function insort_left(a, x, lo = 0, hi = null) {
    lo = bisect_left(a, x, lo, hi)
    a.splice(lo, 0, x)
  }
  function bisect_left(a, x, lo = 0, hi = null) {
    // >= lower_bound
    if (lo < 0) throw new Error('lo must be non-negative')
    if (hi == null) hi = a.length
    while (lo < hi) {
      let mid = parseInt((lo + hi) / 2)
      a[mid] < x ? (lo = mid + 1) : (hi = mid)
    }
    return lo
  }
}
/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
const maxTaskAssign = function(tasks, workers, pills, strength) {
  tasks.sort((a, b) => a - b)
  workers.sort((a, b) => b - a)
  const m = tasks.length, n = workers.length
  const { min, floor } = Math
  let l = 0, r = min(n, m)
  while (l < r) {
    const mid = r - floor((r - l) / 2)
    if (check(mid)) l = mid
    else r = mid - 1
  }

  return l

  function check(k){
    const wArr = workers.slice(0, k), tArr = tasks.slice(0, k)
    let tries = pills, bs = new Bisect()
    wArr.reverse()
    tArr.reverse()
  
    for (let elem of tArr) {
      const place = bs.bisect_left(wArr, elem)
      if (place < wArr.length) {
        wArr.pop()
      } else if (tries > 0) {
        const place2 = bs.bisect_left(wArr, elem - strength)
        if (place2 < wArr.length) {
          wArr.splice(place2, 1)
          tries -= 1
        }
      } else return false
    }
  
    return wArr.length === 0
  }
};
