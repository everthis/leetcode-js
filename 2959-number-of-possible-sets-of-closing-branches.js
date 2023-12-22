/**
 * @param {number} n
 * @param {number} maxDistance
 * @param {number[][]} roads
 * @return {number}
 */
const numberOfSets = function(n, maxDistance, roads) {
    let res = 0;
    for(let i = 0; i < 1 << n; i++) {
        let g = Array.from({ length: n }, () => Array(n).fill(1e9));
        for(let j = 0; j < roads.length; j++) {
            let [x, y, w] = roads[j];
            if((i >> x & 1) && (i >> y & 1)) {
                g[x][y] = g[y][x] = Math.min(g[x][y], w);
            }
        }
        for(let j = 0; j < n; j++) {
            g[j][j] = 0;
        }
        for(let p = 0; p < n; p++) {
            for(let q = 0; q < n; q++) {
                for(let k = 0; k < n; k++) {
                    g[q][k] = Math.min(g[q][k], g[q][p] + g[p][k]);
                }
            }
        }
        let ok = 1;
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                if((i >> j & 1) && (i >> k & 1)) {
                    ok &= (g[j][k] <= maxDistance);
                }
            }
        }
        res += ok;
    }
    return res; 
};
