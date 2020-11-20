/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const leadsToDestination = function(n, edges, source, destination) {
  const inm = new Map(), outm = new Map()
  for(let k = 0, len = edges.length; k < len; k++) {
    const [o, i] = edges[k]
    if(!inm.has(i)) inm.set(i, new Set())
    if(!outm.has(o)) outm.set(o, new Set())
    inm.get(i).add(o)
    outm.get(o).add(i)
  }
  const visited = new Set()
  const obj = { res: true }
  dfs(source)
  return obj.res
  function dfs(node) {
    if((outm.get(node) == null || outm.get(node).size === 0) && node !== destination) {
      obj.res = false
      return
    }
    if(visited.has(node)) {
      obj.res = false
      return
    }
    if(outm.get(node) == null) return
    visited.add(node)
    for(let e of outm.get(node)) {
      if(obj.res) dfs(e)
    }
    visited.delete(node)
  }
};
