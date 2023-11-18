/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maximumScoreAfterOperations = function(edges, values) {
    const n = values.length;
    const g = new Array(n).fill(null).map(() => []);
    for (const edge of edges) {
        const [u, v] = edge;
        g[u].push(v);
        g[v].push(u);
    }

    const subtree = new Array(n);
    for (let i = 0; i < n; i++) {
        subtree[i] = values[i];
    }

    const pre = (node, parent) => {
        for (const child of g[node]) {
            if (child !== parent) {
                pre(child, node);
                subtree[node] += subtree[child];
            }
        }
    };

    pre(0, -1);

    const dp = new Array(n).fill(-1);

    const dfs = (node, parent) => {
        dp[node] = subtree[node] - values[node];
        let sum = 0;
        let cnt = 0;
        for (const child of g[node]) {
            if (child !== parent) {
                dfs(child, node);
                cnt++;
                sum += dp[child];
            }
        }
        if (cnt > 0) {
            dp[node] = Math.max(dp[node], values[node] + sum);
        }
    };

    dfs(0, -1);
    return dp[0];
};
