/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantDirectedConnection = function (edges) {
  const parent = []
  //detect circle
  for (let i = 1; i <= edges.length; i++) {
    parent[i] = i
  }
  let circleEdge, removedEdge, candidateEdge
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i]
    const pu = findParent(parent, u)
    const pv = findParent(parent, v)
    if (pv !== v) {
      removedEdge = [u, v] // node with 2 parents
    } else {
      if (pv === pu) {
        circleEdge = [u, v] // circle edge
      }
      parent[v] = pu
    }
  }
  if (!removedEdge) {
    return circleEdge
  }
  if (circleEdge) {
    return edges.find((d) => d[1] === removedEdge[1] && d[0] !== removedEdge[0])
  } else {
    return removedEdge
  }
}
const findParent = function (parent, i) {
  if (parent[i] !== i) {
    parent[i] = findParent(parent, parent[i])
  }
  return parent[i]
}
