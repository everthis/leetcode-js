/**
 * @param {number[]} coins
 * @param {number[][]} edges
 * @return {number}
 */
var collectTheCoins = function(coins, edges) {
  let n = coins.length;
  let next = Array.from({ length: n }, () => new Set());

  let degree = new Array(n).fill(0);
  for (let edge of edges) {
    let a = edge[0],
      b = edge[1];
    next[a].add(b);
    next[b].add(a);
    degree[a]++;
    degree[b]++;
  }

  let deleted = new Array(n).fill(0);
  let q = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1 && coins[i] === 0) q.push(i);
  }
  while (q.length > 0) {
    let len = q.length;
    while (len--) {
      let cur = q.shift();
      deleted[cur] = 1;
      for (let nxt of next[cur]) {
        degree[nxt]--;
        next[nxt].delete(cur);
        if (degree[nxt] === 1 && coins[nxt] === 0) q.push(nxt);
      }
    }
  }

  let depth = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1 && deleted[i] === 0) {
      q.push(i);
      depth[i] = 1;
    }
  }
  while (q.length > 0) {
    let len = q.length;
    while (len--) {
      let cur = q.shift();
      for (let nxt of next[cur]) {
        degree[nxt]--;
        next[nxt].delete(cur);
        depth[nxt] = Math.max(depth[nxt], depth[cur] + 1);
        if (degree[nxt] === 1) q.push(nxt);
      }
    }
  }

  let ret = 0;
  for (let i = 0; i < n; i++) ret += depth[i] >= 3;

  if (ret >= 1) return (ret - 1) * 2;
  else return 0;
};

// another

let a, cum, res, v, sum, g;
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };
const sm = (a) => a.reduce(((x, y) => x + y), 0);
const tree_dp = (cur, par) => {
    v[cur] = a[cur];
    for (const child of g[cur]) {
        if (child != par) {
            v[cur] += tree_dp(child, cur);
        }
    }
    if (cur != par) {
        let x = v[cur] + cum[par] - a[cur];
        let y = (sum - v[cur]) + cum[cur] - a[par];
        if (x != sum && y != sum) res += 2;
    }
    return v[cur];
};
/**
 * @param {number[]} coins
 * @param {number[][]} edges
 * @return {number}
 */
const collectTheCoins = function(coins, edges) {
    let n = coins.length;
    g = initializeGraph(n), a = coins, res = 0, cum = Array(n), v = Array(n), sum = sm(a);
    packUG(g, edges);
    for (let i = 0; i < n; i++) {
        cum[i] = a[i];
        for (const child of g[i]) cum[i] += a[child];
    }
    tree_dp(0, 0);
    return res;
    
};
