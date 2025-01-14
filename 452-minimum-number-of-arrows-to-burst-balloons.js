/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    if(points.length === 0) return 0
    let res = 1
    let end = points[0][1]
    for(let i = 1; i < points.length; i++) {
        const [s,e] = points[i]
        if(s > end) {
            res++
            end = e
        }
    }

    return res
};

// another

/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function(points) {
  const n = points.length
  if(n === 0) return 0
  points.sort((a, b) => a[1] - b[1])
  let res = 1
  let end = points[0][1]

  for(let i = 1; i < n; i++) {
    if(end >= points[i][0]) continue
    res++
    end = points[i][1]
  }

  return res
};

// another

/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function(points) {
  const sorted = points.sort((a, b) => a[0] - b[0])
  let ans = 0
  let lastX = null
  for (let i = 0; i < sorted.length; i += 1) {
    if (lastX && sorted[i][0] <= lastX) {
      lastX = Math.min(sorted[i][1], lastX)
    } else {
      ans += 1
      lastX = sorted[i][1]
    }
  }
  return ans
}

// another

/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function(points) {
  if(points == null || points.length === 0) return 0
  points.sort((a, b) => a[1] - b[1])
  let end = points[0][1], res = 1
  for(let i = 1, len = points.length; i < len; i++) {
    if(points[i][0] > end) {
      end = points[i][1]
      res++
    }
  }
  return res
};
