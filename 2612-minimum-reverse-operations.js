////////////////////////// Template ////////////////////////////////////
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
///////////////////////////////////////////////////////////////////

/**
 * @param {number} n
 * @param {number} p
 * @param {number[]} banned
 * @param {number} k
 * @return {number[]}
 */
var minReverseOperations = function (n, p, banned, k) {
  const distances = new Array(n).fill(Number.MAX_SAFE_INTEGER)
  for (const x of banned) {
    distances[x] = -1
  }

  const nodes = [p],
    newNodes = []
  distances[p] = 0

  while (nodes.length > 0) {
    let iMin = Number.MAX_SAFE_INTEGER
    let iMax = Number.MIN_SAFE_INTEGER

    for (const node of nodes) {
      const base = node - k + 1

      // j: segment start position
      // i: update position
      const j2i = (j) => base + (j - base) * 2

      const update = (i) => {
        if (distances[i] === Number.MAX_SAFE_INTEGER) {
          distances[i] = distances[node] + 1
          newNodes.push(i)
        }
      }

      // inclusive
      const lo = j2i(Math.max(0, base))
      const hi = j2i(Math.min(node + k, n) - k)
      for (let i = lo; i <= Math.min(hi, iMin - 2); i += 2) {
        update(i)
      }
      for (let i = Math.max(lo, iMax + 2); i <= hi; i += 2) {
        update(i)
      }
      iMin = Math.min(iMin, lo)
      iMax = Math.max(iMax, hi)
    }

    nodes.splice(0, nodes.length, ...newNodes)
    newNodes.length = 0
  }

  for (let i = 0; i < n; i++) {
    if (distances[i] === Number.MAX_SAFE_INTEGER) {
      distances[i] = -1
    }
  }
  return distances
}
