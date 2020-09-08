/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
const minCostToSupplyWater = function(n, wells, pipes) {
  const uf = Array(n + 1).fill(0)
  const edges = []
  for(let i = 0; i < n; i++) {
    uf[i + 1] = i + 1
    edges.push([0, i + 1, wells[i]])
  }
  for(let p of pipes) {
    edges.push(p)
  }
  edges.sort((a, b) => a[2] - b[2])
  let res = 0
  for(let e of edges) {
    const x = find(e[0]), y = find(e[1])
    if(x !== y) {
      res += e[2]
      uf[x] = y
      n--
    }
  }
  return res
  
  function find(x) {
    if(x !== uf[x]) uf[x] = find(uf[x])
    return uf[x]
  }
};
