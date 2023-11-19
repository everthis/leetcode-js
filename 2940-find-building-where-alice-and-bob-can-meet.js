/**
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
var leftmostBuildingQueries = function (heights, queries) {
    const st = []
    const [hs, qs] = [heights, queries]
    let n = qs.length;
    let ans = new Array(n).fill(-1);
    let es = new Array(hs.length).fill().map(() => []);
    for (let i = 0; i < n; i++) {
        let x = qs[i][0];
        let y = qs[i][1];
        if (x > y) {
            [x, y] = [y, x];
        }
        if (hs[y] > hs[x] || x === y) {
            ans[i] = y;
        } else {
            es[y].push([hs[x], i]);
        }
    }

    for (let i = hs.length - 1; i >= 0; i--) {
        let n1 = st.length;
        for (let [x, y] of es[i]) {
            let p = search(x);
            if (p < n1 && p >= 0) {
                ans[y] = st[p][1];
            }
        }
        while (st.length > 0 && st[st.length - 1][0] <= hs[i]) {
            st.pop();
        }
        st.push([hs[i], i]);
    }
    return ans;

  
     function search(x) {
        let l = 0;
        let r = st.length - 1;
        let ans = -1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (st[m][0] > x) {
                ans = Math.max(ans, m);
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return ans;
    }
}
