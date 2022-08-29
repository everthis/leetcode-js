/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  const indegree = Array(n).fill(0)
  for(const [from, to] of edges) {
    indegree[to]++
  }
  let res = []
  for(let i = 0; i <n; i++) {
    const e = indegree[i]
    if(e === 0) res.push(i)
  }
  
  return res
};
