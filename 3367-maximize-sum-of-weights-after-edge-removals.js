/**
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maximizeSumOfWeights = function(edges, k) {
    const n = edges.length + 1;
    const g = Array.from({ length: n }, () => ({}));
    
    for (const [x, y, w] of edges) {
        g[x][y] = g[y][x] = w;
    }

    function dfs(idx, p) {
        const ret = [0, 0];
        const h = [];
        
        for (const ch in g[idx]) {
            if (ch != p) {
                const [a, b] = dfs(ch, idx);
                h.push([a - b, a, b]);
            }
        }

        h.sort((a, b) => b[0] - a[0]); // Max-heap simulation
        let take = 0;
        let take_k = 0;
        let leave_k = 0;
        let leave = 0;
        let ct = 0;

        while (h.length) {
            const [_, a, b] = h.pop();
            ct += 1;
            if (ct <= k - 1) {
                take += b;
            } else if (ct === k) {
                take_k = b;
                leave_k = a;
            } else {
                leave += a;
            }
        }

        const v = take + take_k + leave;
        const w = take + leave_k + leave + (p !== -1 ? g[p][idx] : 0);
        return [v, Math.max(v, w)];
    }

    return dfs(0, -1)[1];  
};
