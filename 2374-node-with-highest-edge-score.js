/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
  const n = edges.length
    const score = Array(n).fill(0)
    for(let i = 0; i < n; i++) {
      const from = i, to = edges[i]
      score[to] += from
    }
  const max = Math.max(...score)
  for(let i = 0; i < n; i++) {
    const e = score[i]
    if(e === max) return i
  }
};
