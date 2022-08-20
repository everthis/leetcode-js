/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
   const res = []
   
   for(const [x, y, r] of queries) {
     const square = r ** 2
     const center = [x, y]
     let cnt = 0
     for(const d of points) {
       if(disSquare(d, center) <= square) {
         cnt++
       }       
     }
     res.push(cnt)
   }
   
   return res
  
  function disSquare(a, b) {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
  }
};
