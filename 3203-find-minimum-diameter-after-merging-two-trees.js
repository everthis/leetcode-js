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

// another

/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function(edges1, edges2) {
    const [d1, i, j] = diameter(edges1);
    const [d2, ii, jj] = diameter(edges2);
    return Math.max(d1, d2, Math.floor((d1 + 1) / 2) + Math.floor((d2 + 1) / 2) + 1); 

    function farthest(G, i) {
        const n = G.length;
        const bfs = [i];
        const seen = new Array(n).fill(0);
        seen[i] = 1;
        let res = 0;
        let maxd = 0;
        for (let k = 0; k < bfs.length; k++) {
            const node = bfs[k];
            for (let j = 0; j < G[node].length; j++) {
                const neighbor = G[node][j];
                if (seen[neighbor] === 0) {
                    seen[neighbor] = seen[node] + 1;
                    bfs.push(neighbor);
                    if (seen[neighbor] > maxd) {
                        res = neighbor;
                        maxd = seen[neighbor];
                    }
                }
            }
        }
        return [res, maxd - 1];
    }

    function diameter(edges) {
        if (edges.length === 0) {
            return [0, 0, 0];
        }
        const n = edges.length + 1;
        const G = Array.from({ length: n }, () => []);
        for (let k = 0; k < edges.length; k++) {
            const [i, j] = edges[k];
            G[i].push(j);
            G[j].push(i);
        }
        let [v1, d] = farthest(G, 0);
        let [v2, d2] = farthest(G, v1);
        return [d2, v1, v2];
    }
};

