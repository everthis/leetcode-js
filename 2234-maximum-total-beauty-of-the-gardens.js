/**
 * @param {number[]} flowers
 * @param {number} newFlowers
 * @param {number} target
 * @param {number} full
 * @param {number} partial
 * @return {number}
 */
const maximumBeauty = function (flowers, newFlowers, target, full, partial) {
  flowers.sort((x, y) => x - y)
  flowers = flowers.map((x) => Math.min(x, target))
  let a = flowers,
    n = a.length,
    k = newFlowers,
    pre = preSum(a),
    bi = new Bisect()
  let res = 0
  for (let i = 0; i <= n; i++) {
    if (i < n && a[n - 1 - i] == target) continue
    let step = i * target - (pre[n] - pre[n - i])
    if (step <= k) {
      let beauty
      if (i == n) {
        beauty = i * full
      } else {
        let minPartial = BinarySearch(a[0], target, step, i)
        beauty = i * full + minPartial * partial
      }
      if (beauty > res) res = beauty
    }
  }
  return res

  function BinarySearch (low, high, step, i) {
    while (low < high - 1) {
      let mid = low + parseInt((high - low) / 2)
      if (possible(mid, step, i)) {
        low = mid
      } else {
        high = mid
      }
    }
    return low
  }

  function possible (m, step, i) {
    let idx = bi.bisect_left(a, m, 0, n - i)
    let need = m * idx - pre[idx]
    return need <= k - step
  }
}

/////////////////// Template /////////////////////////////////
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
      a[mid] > x ? (hi = mid) : (lo = mid + 1)
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

const preSum = (a) => {
  let pre = [0]
  for (let i = 0; i < a.length; i++) {
    pre.push(pre[i] + a[i])
  }
  return pre
}
//////////////////////////////////////////////////////////////////
