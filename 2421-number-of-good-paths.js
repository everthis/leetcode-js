
///////////////////////////////////////////////////// Template ///////////////////////////////////////////////////////////////////////
const packUG = (g, edges) => { for (const [u, v] of edges) { g[u].push(v); g[v].push(u); } };
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };

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
        if (x == y) return false;
        if (parent[x] < parent[y]) [x, y] = [y, x];
        parent[x] += parent[y];
        parent[y] = x;
        return true;
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
const numberOfGoodPaths = (a, edges) => {
    let n = a.length, g = initializeGraph(n), f = Array(n).fill(0), ds = new DJSet(n), res = 0;
    packUG(g, edges);
    let d = a.map((x, i) => [x, i]);
    d.sort((x, y) => {
        if (x[0] != y[0]) return x[0] - y[0];
        return x[1] - y[1];
    })
    for (let r = 0; r < n;) { // l: start node  r: end node
        let l = r;
        while (r < n && d[l][0] == d[r][0]) r++; // condition 1
        for (let i = l; i < r; i++) {
            let cur = d[i][1];
            for (const child of g[cur]) {
                if (a[child] <= d[l][0]) ds.union(child, cur); // condition 2
            }
        }
        for (let i = l; i < r; i++) { // loop the path
            let cur = d[i][1];
            res += ++f[ds.find(cur)];
        }
        for (let i = l; i < r; i++) {
            let cur = d[i][1];
            f[ds.find(cur)]--;
        }
    }
    return res;
};
