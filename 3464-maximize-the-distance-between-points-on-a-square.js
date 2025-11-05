/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
const maxDistance = function (side, points, k) {
  const n = points.length
  const arr = []

  const next = new Array(15000)

  for (const p of points) {
    if (p[0] === 0) {
      arr.push(p[1])
    } else if (p[1] === side) {
      arr.push(side + p[0])
    } else if (p[0] === side) {
      arr.push(2 * side + side - p[1])
    } else if (p[1] === 0) {
      arr.push(3 * side + side - p[0])
    }
  }

  arr.sort((a, b) => a - b)

  let low = 0,
    high = side
  while (low < high) {
    const mid = high - Math.floor((high - low) / 2)
    if (isOK(mid, k)) {
      low = mid
    } else {
      high = mid - 1
    }
  }
  return low

  function isOK(dist, k) {
    let j = 0
    for (let i = 0; i < n; i++) {
      while (pos(j) - arr[i] < dist) {
        j++
      }
      next[i] = j
    }

    for (let i = 0; i < n; i++) {
      let flag = true
      let cur = i
      for (let t = 0; t < k - 1; t++) {
        if (cur < n) {
          cur = next[cur]
        } else {
          cur = next[cur % n] + n
        }
        if (cur >= i + n) {
          flag = false
          break
        }
      }
      if (pos(i) - pos(cur % n) < dist) {
        flag = false
      }
      if (flag) {
        return true
      }
    }
    return false
  }

  function pos(j) {
    if (j < n) {
      return arr[j]
    } else {
      return arr[j % n] + side * 4
    }
  }

}


// another


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
