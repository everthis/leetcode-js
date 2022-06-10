/**
 * @param {number} n
 * @param {number} m
 */
function BookMyShow(n, m) {
    let a = Array(n).fill(0), st = new SegmentTreeRMQ(a), fen = new Fenwick(n + 3);
    for (let i = 0; i < n; i++) fen.update(i, m);
    return { gather, scatter }
    function gather(k, maxRow) {
        let idx = st.indexOf(0, m - k);
        if (idx == -1 || idx > maxRow) return [];
        let min = st.minx(idx, idx + 1);
        st.update(idx, min + k);
        fen.update(idx, -k);
        return [idx, min];
    }
    function scatter(k, maxRow) {
        let totToMaxRow = fen.query(maxRow);
        if (totToMaxRow < k) return false;
        while (k > 0) {
            let idx = st.indexOf(0, m - 1);
            if (idx == -1 || idx > maxRow) break;
            let min = st.minx(idx, idx + 1);
            let use = Math.min(k, m - min);
            k -= use;
            st.update(idx, min + use);
            fen.update(idx, -use);
        }
        return true;
    }
}

/** 
 * Your BookMyShow object will be instantiated and called as such:
 * var obj = new BookMyShow(n, m)
 * var param_1 = obj.gather(k,maxRow)
 * var param_2 = obj.scatter(k,maxRow)
 */
////////////////////////////////////////////////// Template ////////////////////////////////////////////////////////////////////
function Fenwick(n) {
    let a = Array(n).fill(0);
    return { query, update, rangeSum, tree }
    function query(i) { // [0, i] prefix sum
        let sum = 0;
        for (i++; i > 0; i = parent(i)) sum += a[i];
        return sum;
    }
    function update(i, v) {
        for (i++; i < n; i = next(i)) a[i] += v;
    }
    function rangeSum(l, r) {
        return query(r) - query(l - 1);
    }
    function parent(x) {
        return x - lowestOneBit(x);
    }
    function next(x) {
        return x + lowestOneBit(x);
    }
    function lowestOneBit(x) {
        return x & -x;
    }
    function tree() {
        return a;
    }
}

function SegmentTreeRMQ(A) {
    let n = A.length, h = Math.ceil(Math.log2(n)), len = 2 * 2 ** h, a = Array(len).fill(Number.MAX_SAFE_INTEGER);
    h = 2 ** h;
    initializeFromArray();
    return { update, minx, indexOf, tree }
    function initializeFromArray() {
        for (let i = 0; i < n; i++) a[h + i] = A[i];
        for (let i = h - 1; i >= 1; i--) propagate(i);
    }
    function update(pos, v) {
        a[h + pos] = v;
        for (let i = parent(h + pos); i >= 1; i = parent(i)) propagate(i);
    }
    function propagate(i) {
        a[i] = Math.min(a[left(i)], a[right(i)]);
    }
    function minx(l, r) {
        let min = Number.MAX_SAFE_INTEGER;
        if (l >= r) return min;
        l += h;
        r += h;
        for (; l < r; l = parent(l), r = parent(r)) {
            if (l & 1) min = Math.min(min, a[l++]);
            if (r & 1) min = Math.min(min, a[--r]);
        }
        return min;
    }
    function indexOf(l, v) {
        if (l >= h) return -1;
        let cur = h + l;
        while (1) {
            if (a[cur] <= v) {
                if (cur >= h) return cur - h;
                cur = left(cur);
            } else {
                cur++;
                if ((cur & cur - 1) == 0) return -1;
                if (cur % 2 == 0) cur = parent(cur);
            }
        }
    }
    function parent(i) {
        return i >> 1;
    }
    function left(i) {
        return 2 * i;
    }
    function right(i) {
        return 2 * i + 1;
    }
    function tree() {
        return a;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

