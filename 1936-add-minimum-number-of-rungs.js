/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
const addRungs = function(rungs, dist) {
  let res = 0
  let pre = 0
  const { floor, ceil } = Math
  for(let r of rungs) {
    if(r - pre > dist) {
      // console.log(r, pre)
      res += ceil((r - pre) / dist) - 1
    }
    pre = r
  }
  return res
};
