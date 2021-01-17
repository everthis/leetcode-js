/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function(A) {
  const arr = []
  let max = 0
  A.forEach(e => {
    const tmp = Math.min(...e)
    if(tmp > max) max=tmp
    arr.push(tmp)
  })
  let res = 0
  for(let e of arr) {
    if(e >= max) res++
  }
  return res
};
