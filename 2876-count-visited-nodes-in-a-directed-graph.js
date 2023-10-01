/**
 * @param {number[]} edges
 * @return {number[]}
 */
var countVisitedNodes = function(edges) {
    let n = edges.length, res = new Array(n).fill(0), j = 0;
    for (let i = 0; i < n; j = ++i) {
        let seen = new Set();
        let s = [];
        while (!seen.has(j) && res[j] == 0) {
            seen.add(j);
            s.push(j);
            j = edges[j];
        }
        if (seen.has(j)) { // hit the cycle
            let k = s.length - s.indexOf(j);
            for (j = 0; j < k; ++j) {
                res[s.pop()] = k;
            }
        }
        while (s.length) {
            j = s.pop();
            res[j] = res[edges[j]] + 1;
        }
    }
    return res;  
};
