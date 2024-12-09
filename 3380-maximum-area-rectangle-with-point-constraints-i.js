/**
 * @param {number[][]} points
 * @return {number}
 */
var maxRectangleArea = function (points) {
  const n = points.length
  const st = new Set()
  for (const i of points) st.add(i[0] + ',' + i[1])
  let res = -1

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const x1 = points[i][0],
        y1 = points[i][1],
        x2 = points[j][0],
        y2 = points[j][1]
      if (x1 === x2 || y1 === y2) continue
      if (st.has(x1 + ',' + y2) && st.has(x2 + ',' + y1)) {
        const min1 = Math.min(x1, x2),
          max1 = Math.max(x1, x2),
          min2 = Math.min(y1, y2),
          max2 = Math.max(y1, y2)
        let isid = true
        for (const point of points) {
          const cx = point[0],
            cy = point[1]
          if (
            (cx > min1 && cx < max1 && cy > min2 && cy < max2) ||
            ((cx === min1 || cx === max1) && cy > min2 && cy < max2) ||
            ((cy === min2 || cy === max2) && cx > min1 && cx < max1)
          ) {
            isid = false
            break
          }
        }
        if (isid) res = Math.max(res, (max1 - min1) * (max2 - min2))
      }
    }
  }
  return res
}
