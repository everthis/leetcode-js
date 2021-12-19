const packDGInOutDegreeMap = (gm, edges, dm) => { for (const [u, v] of edges) { if (!gm.has(u)) gm.set(u, []); gm.get(u).push(v); dm.set(u, (dm.get(u) || 0) + 1); dm.set(v, (dm.get(v) || 0) - 1); } };

/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
const validArrangement = (pairs) => {
    let g = new Map(), deg = new Map(), res = [];
    packDGInOutDegreeMap(g, pairs, deg);
    let start = -1;
    for (const [node, ] of deg) { // looking for starting node
        if (start == -1 || deg.get(node) == 1) start = node;
    }
    let path = eulerianPath(g, start);
    path.reverse();
    for (let i = 1; i < path.length; i++) {
       res.push([path[i-1], path[i]]);
    }
    return res;
};

const eulerianPath = (g, start) => { // eulerian Path with Hierholzer’s Algorithm
    let st = [start], path = [];
    while (st.length) {
        let u = st[st.length - 1], ua = g.get(u) || [];
        if (ua.length) {
            let v = ua.pop();
            g.set(u, ua);
            st.push(v);
        } else {
            path.push(u);
            st.pop();
        }
    }
    return path;
};
