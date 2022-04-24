/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
  const set = new Set()
  for(let arr of circles) helper(arr)
  return set.size
  
  function helper(arr) {
    const [cx, cy, r] = arr
    let bottomLeftX = cx - r, bottomLeftY = cy - r
    let topRightX = cx + r, topRightY = cy + r
    for(let i = bottomLeftX; i <= topRightX; i++) {
      for(let j = bottomLeftY; j <= topRightY; j++) {
        if (Math.sqrt((i - cx) ** 2 + (j - cy) ** 2) <= r) {
          set.add(`${i},${j}`)
        }
      }
    }
  }
};
