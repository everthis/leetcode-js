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
