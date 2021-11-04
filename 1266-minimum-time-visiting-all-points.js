/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function(points) {
  let res = 0
  for(let i = 1; i < points.length; i++) {
    res += calc(points[i], points[i - 1])
  }
  return res
  
  function calc(p1, p2) {
    const [x1, y1] = p1,  [x2, y2] = p2
    const { abs, min } = Math
    const deltaX = abs(x1 - x2), deltaY = abs(y1 - y2)
    
    return min(deltaX, deltaY) + abs(deltaX - deltaY)
  }
};
