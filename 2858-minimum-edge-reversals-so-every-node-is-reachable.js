/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const minEdgeReversals = function (n, edges) {
  let edgesMap = {}
  for (let i = 0; i < edges.length; i++) {
    let a = edges[i][0]
    let b = edges[i][1]
    if (edgesMap[a] === undefined) {
      edgesMap[a] = []
    }
    //its a forward edge
    edgesMap[a].push([b, 'f'])
    if (edgesMap[b] === undefined) {
      edgesMap[b] = []
    }
    //its a revers edge
    edgesMap[b].push([a, 'r'])
  }

  //We can cosnider any node as root node, Here I choose node 0
  let res = bfs(0)
  let ans = []
  ans[0] = res[0]
  let dist = res[1]
  for (let i = 1; i < n; i++) {
    //Ans for rest of the node will be, distance from node to root + answer of root
    ans[i] = dist[i][0] - dist[i][1] + ans[0]
  }

  return ans
  function bfs(root) {
    let distance = [],
      visited = [],
      totalReversal = 0
    let queue = []
    queue.push([root, 0, 0])
    distance[root] = [0, 0]
    visited[root] = true
    while (queue.length > 0) {
      let nextLevelQueue = []
      for (let i = 0; i < queue.length; i++) {
        let node = queue[i][0]
        let weightF = queue[i][1]
        let weightR = queue[i][2]
        for (let j = 0; j < edgesMap[node].length; j++) {
          let neighbour = edgesMap[node][j][0]
          if (visited[neighbour] !== undefined) {
            continue
          }
          let type = edgesMap[node][j][1]
          let f = weightF,
            r = weightR
          if (type === 'r') {
            totalReversal += 1
            r++
          } else {
            f++
          }
          visited[neighbour] = true
          distance[neighbour] = [f, r]
          nextLevelQueue.push([neighbour, f, r])
        }
      }
      queue = nextLevelQueue
    }
    return [totalReversal, distance]
  }
}
