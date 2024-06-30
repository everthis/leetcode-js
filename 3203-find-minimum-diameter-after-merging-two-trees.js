/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function (edges1, edges2) {
  const getDiameter = (edges) => {
    if (edges.length === 0) {
      return 0
    }
    const graph = new Map()
    for (const [u, v] of edges) {
      if (!graph.has(u)) {
        graph.set(u, [])
      }
      graph.get(u).push(v)
      if (!graph.has(v)) {
        graph.set(v, [])
      }
      graph.get(v).push(u)
    }

    function dfs(node, parent) {
      // return longest path length and farthest node
      let res = [0, node]
      for (const neighbor of graph.get(node) || []) {
        if (neighbor === parent) {
          continue
        }
        const tmp = dfs(neighbor, node)
        if (tmp[0] > res[0]) res = tmp
      }
      res[0] += 1
      return res
    }

    const [_, endNode] = dfs(0, -1)
    const [diameter, __] = dfs(endNode, -1)
    return diameter - 1
  }

  const diameter1 = getDiameter(edges1)
  const diameter2 = getDiameter(edges2)
  const radius1 = Math.floor((diameter1 + 1) / 2)
  const radius2 = Math.floor((diameter2 + 1) / 2)
  return Math.max(radius1 + radius2 + 1, diameter1, diameter2)
}
