/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (side, points, k) {
  points = points
    .map(([x, y]) => {
      // convert to points on a flat line
      if (x === 0) {
        // left
        return y
      } else if (y === side) {
        // top
        return x + y
      } else if (x === side) {
        // right
        return side * 2 + (side - y)
      } else {
        // bottom
        return side * 3 + (side - x)
      }
    })
    .sort((a, b) => a - b)

  let low = 1,
    high = side
  while (low < high) {
    let mid = Math.ceil((low + high) / 2)
    if (isPossible(points, side, k, mid)) low = mid
    else high = mid - 1
  }
  return low
}

// Check that we can take at least k points that are at least `minDist` apart
function isPossible(points, side, k, minDist) {
  const n = points.length,
    endOfLine = side * 4
  for (let i = 0; i < n; i++) {
    let j = i,
      taken = 1
    while (taken < k) {
      // binary search for the leftmost point at least `minDist` away from points[j], on the right of j.
      let low = j,
        high = n - 1
      while (low < high) {
        let mid = Math.floor((low + high) / 2)
        if (points[mid] - points[j] >= minDist) high = mid
        else low = mid + 1
      }
      // no valid point on the right side, or too close to the starting point (wraps around circularly).
      if (
        points[low] - points[j] < minDist ||
        endOfLine + points[i] - points[low] < minDist
      ) {
        break
      }
      ;(j = low), taken++
    }
    if (taken === k) {
      return true
    }
  }
  return false
}
