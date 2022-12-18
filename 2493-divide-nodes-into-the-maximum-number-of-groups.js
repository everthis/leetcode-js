/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const magnificentSets = function (n, edges) {
  function getComponents(n) {
    let visited = Array(n + 1).fill(false);
    let ans = [];
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        ans.push(visit(i, [], visited));
      }
    }
    return ans;
  }

  function visit(cur, nodes, visited) {
    visited[cur] = true;
    nodes.push(cur);
    for (let next of map.get(cur)) {
      // skip if you have already visited this node
      if (visited[next]) continue;
      visit(next, nodes, visited);
    }
    return nodes;
  }

  function find(node, n) {
    let group = Array(n + 1).fill(-1);

    let queue = [];
    queue.push(node);
    let groups = 0;
    while (queue.length > 0) {
      let k = queue.length;
      // store nodes in set to avoid duplicates
      let set = new Set();
      while (k-- > 0) {
        let cur = queue.shift();
        // this case occurs when 2 nodes in the same level are connected
        // so, return -1
        if (group[cur] != -1) return -1;
        group[cur] = groups;
        for (let next of map.get(cur)) {
          if (group[next] == -1) {
            set.add(next);
          }
        }
      }
      for (let val of set) queue.push(val);
      groups++;
    }
    return groups;
  }

  let map = new Map(); // Integer -> List<Integer>
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
  }
  // adjacency list
  for (let edge of edges) {
    let u = edge[0],
      v = edge[1];
    map.get(u).push(v);
    map.get(v).push(u);
  }

  // get all components as Graph can be disconnected
  let components = getComponents(n);

  let ans = 0;
  /*
    - Take each component and get max groups can be formed from that component
    - return -1 if you can't form groups from any one of the components
  */
  for (let component of components) {
    let groups = -1;
    for (let node of component) {
      groups = Math.max(groups, find(node, n));
    }
    if (groups == -1) return -1;
    ans += groups;
  }

  return ans;
};

// another

/////////////////////// Template ////////////////////////////////////////
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };
const initialize2DArray = (n, m) => { let d = []; for (let i = 0; i < n; i++) { let t = Array(m).fill(Number.MAX_SAFE_INTEGER); d.push(t); } return d; };

function DJSet(n) {
    // parent[i] < 0, -parent[i] is the group size which root is i. example: (i -> parent[i] -> parent[parent[i]] -> parent[parent[parent[i]]] ...)
    // parent[i] >= 0, i is not the root and parent[i] is i's parent. example: (... parent[parent[parent[i]]] -> parent[parent[i]] -> parent[i] -> i)
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, par }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x != y) {
            if (parent[x] < parent[y]) [x, y] = [y, x];
            parent[x] += parent[y];
            parent[y] = x;
        }
        return x == y;
    }
    function count() { // total groups
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return parent;
    }
}

const isBipartite = (g) => {
    let n = g.length, start = 1, visit = Array(n).fill(false), q = [], color = Array(n).fill(0); // 0: no color, 1: red  -1: blue
    for (let i = start; i < n; i++) {
        if (color[i] != 0) continue;
        q.push(i);
        color[i] = 1;
        if (visit[i]) continue;
        while (q.length) {
            let cur = q.shift();
            if (visit[cur]) continue;
            for (const child of g[cur]) {
                if (color[child] == color[cur]) return false;
                if (color[child]) continue;
                color[child] = -color[cur];
                q.push(child);
            }
        }
    }
    return true;
};
////////////////////////////////////////////////////////////////////
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const magnificentSets = (n, edges) => {
    let g = initializeGraph(n + 1), ds = new DJSet(n + 1);
    packUG(g, edges);
    if (!isBipartite(g)) return -1;
    let d = initialize2DArray(n + 1, n + 1), res = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) d[i][i] = 0;
    for (const [u, v] of edges) {
        d[u][v] = 1;
        d[v][u] = 1;
        ds.union(u, v);
    }
    wf(d);
    for (let i = 1; i <= n; i++) {
        let max = 0;
        for (let j = 1; j <= n; j++) {
            if (d[i][j] >= Number.MAX_SAFE_INTEGER) continue;
            max = Math.max(max, d[i][j]);
        }
        let par = ds.find(i);
        res[par] = Math.max(res[par], max + 1);
    }
    let ans = 0;
    for (let i = 1; i <= n; i++) ans += res[i];
    return ans;
};

const wf = (g) => {
    let n = g.length;
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (g[i][j] > g[i][k] + g[k][j]) {
                    g[i][j] = g[i][k] + g[k][j];
                }
            }
        }
    }
};
