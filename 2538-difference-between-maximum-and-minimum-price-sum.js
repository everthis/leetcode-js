/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @return {number}
 */
const maxOutput = function(n, edges, price) {
  const tree = [];
  const memo = [];
  for (let i = 0; i < n; i++) tree[i] = [];
  for (const [a, b] of edges) {
    tree[a].push(b);
    tree[b].push(a);
  }

  let result = 0;
  dfs(0, -1);

  function dfs(node, parent) {
    const max = [price[node], 0];
    const nodes = tree[node] ?? [];
    for (const child of nodes) {
      if (child === parent) continue;
      const sub = dfs(child, node);
      result = Math.max(result, max[0] + sub[1]);
      result = Math.max(result, max[1] + sub[0]);
      max[0] = Math.max(max[0], sub[0] + price[node]);
      max[1] = Math.max(max[1], sub[1] + price[node]);
    }
    return max;
  }

  return result;
};
