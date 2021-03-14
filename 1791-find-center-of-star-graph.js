/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = function(edges) {
  const map = {}
  for(let e of edges) {
    const [u, v] = e
    if(map[u] == null) map[u] = []
    if(map[v] == null) map[v] = []
    map[u].push(v)
    map[v].push(u)
  }
  
  const keys = Object.keys(map)
  let res, max = -Infinity
  keys.forEach(e => {
    if(map[e].length > max) {
      res = e
      max = map[e].length
    }
  })
  
  return res
  
};
