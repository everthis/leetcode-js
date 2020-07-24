/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
  const res = []
  const path = []
  bt(graph, res, path, 0)
  return res
};

function bt(g, res, path, cur) {
  path.push(cur)
  if(cur === g.length - 1) res.push(path.slice())
  else {
    for(let i of g[cur]) bt(g, res, path, i)
  }
  path.pop()
}
