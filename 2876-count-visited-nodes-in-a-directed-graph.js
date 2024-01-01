/**
 * @param {number[]} edges
 * @return {number[]}
 */
const countVisitedNodes = function(edges) {
  const n = edges.length, res = Array(n).fill(0)
  for(let i = 0; i < n; i++) {
    const visited = new Set()
    let j = i, q = []
    while(res[j] === 0 && !visited.has(j)) {
      q.push(j)
      visited.add(j)
      j = edges[j]
    }

    if(visited.has(j)) {
      const k = q.length - q.indexOf(j)
      for(let ii = 0; ii < k; ii++) {
        res[q.pop()] = k
      }
    }

    while(q.length) {
      const ii = q.pop()
      res[ii] = res[edges[ii]] + 1
    }

  }

  return res
};
