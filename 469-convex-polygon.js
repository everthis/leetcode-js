/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isConvex = function(points) {
  let negative = false
  let positive = false
  const num = points.length
  for (let p1 = 0; p1 < num; p1 += 1) {
    const p2 = (p1 + 1) % num
    const p3 = (p2 + 1) % num
    const [Ax, Ay] = points[p1]
    const [Bx, By] = points[p2]
    const [Cx, Cy] = points[p3]
    const crossProduct = CrossProductLength(Ax, Ay, Bx, By, Cx, Cy)
    if (crossProduct < 0) {
      negative = true
    } else if (crossProduct > 0) {
      positive = true
    }
    if (negative && positive) return false
  }
  return true
}

function CrossProductLength(Ax, Ay, Bx, By, Cx, Cy) {
  const BAx = Ax - Bx
  const BAy = Ay - By
  const BCx = Cx - Bx
  const BCy = Cy - By
  return BAx * BCy - BAy * BCx
}
