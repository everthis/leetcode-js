/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const seePeople = function(heights) {
  const m = heights.length, n = heights[0].length
  const res = Array.from({ length: m }, () => Array(n).fill(0))
  
  for(let i = 0; i < m; i++) {
    const stk = []
    for(let j = n - 1; j >= 0; j--) {
      let del = 0

      while(stk.length && heights[i][j] > heights[i][stk[stk.length - 1]]) {
        del++
        stk.pop()
      }
      res[i][j] = del + (stk.length ? 1 : 0)
      if(stk.length && heights[i][j] === heights[i][stk[stk.length - 1]]) continue
      stk.push(j)
    }
  }
  
  for(let j = 0; j < n; j++) {
    const stk = []
    for(let i = m - 1; i >= 0; i--) {
      let del = 0

      while(stk.length && heights[i][j] > heights[stk[stk.length - 1]][j]) {
        del++
        stk.pop()
      }
      res[i][j] += del + (stk.length ? 1 : 0)
      if(stk.length && heights[i][j] === heights[stk[stk.length - 1]][j]) continue
      stk.push(i)
    }
  }
  
  return res
};
