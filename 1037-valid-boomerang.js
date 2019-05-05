/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = function(points) {
  if(angle(points[0], points[1], points[2]) &&
     angle(points[1], points[2], points[0]) &&
     angle(points[1], points[0], points[2]) ) return false
  return true
};

// distinct or in a line
function angle(p1, p2, p3) {
  if((p1[0] === p2[0] && p1[1] === p2[1]) ||
     (p2[0] === p3[0] && p2[1] === p3[1]) ||
     (p1[0] === p3[0] && p1[1] === p3[1]) ) return true
  
  return collinear(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1])
}
function collinear(x1, y1, x2, y2,  x3, y3)  { 
  return (y3 - y2) * (x2 - x1) === (y2 - y1) * (x3 - x2)
} 
