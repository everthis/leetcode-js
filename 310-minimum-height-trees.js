/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function(n, edges) {
  if (n === 1) {
    return [0];
  }
  const adj = [];
  for (let i = 0; i < n; i++) {
    adj.push([]);
  }
  for (let edge of edges) {
    adj[edge[0]].push(edge[1]);
    adj[edge[1]].push(edge[0]);
  }
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (adj[i].length === 1) {
      leaves.push(i);
    }
  }

  while (n > 2) {
    n -= leaves.length;
    let newLeaves = [];
    for (let i of leaves) {
      let j = adj[i].shift();
      let idx = adj[j].indexOf(i);
      adj[j].splice(idx, 1);
      if (adj[j].length === 1) newLeaves.push(j);
    }
    leaves = newLeaves;
  }

  return leaves;
};
