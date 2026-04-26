const INF = 10000000000000000n;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxAlternatingSum = function(nums, k) {
    const A = nums
        const n = A.length;
        let res = -INF;

        // Coordinate Compression
        const sortedUnique = [...new Set(A)].sort((a, b) => a - b);
        const mp = new Map();
        sortedUnique.forEach((val, idx) => mp.set(val, idx));
        const id = sortedUnique.length;

        const seg1 = new SegTree(id);
        const seg2 = new SegTree(id);
        const dp = Array.from({ length: n }, () => new BigUint64Array(2)); 
        // Using BigInt64Array for DP values
        const dpVal = Array.from({ length: n }, () => [0n, 0n]);

        for (let i = 0; i < n; i++) {
            const curValue = BigInt(A[i]);
            const pos = mp.get(A[i]);

            if (i >= k) {
                const prev = A[i - k];
                const prev_pos = mp.get(prev);
                seg1.update(prev_pos, dpVal[i - k][0], 1, 0, id - 1);
                seg2.update(prev_pos, dpVal[i - k][1], 1, 0, id - 1);
            }

            dpVal[i][0] = curValue;
            dpVal[i][1] = curValue;

            const best = seg2.query(0, pos - 1, 1, 0, id - 1);
            if (best > -INF) {
                const sum = curValue + best;
                if (sum > dpVal[i][0]) dpVal[i][0] = sum;
            }

            const best2 = seg1.query(pos + 1, id - 1, 1, 0, id - 1);
            if (best2 > -INF) {
                const sum = curValue + best2;
                if (sum > dpVal[i][1]) dpVal[i][1] = sum;
            }

            if (dpVal[i][0] > res) res = dpVal[i][0];
            if (dpVal[i][1] > res) res = dpVal[i][1];
        }

        return Number(res);
};



class SegTree {
    constructor(sz) {
        this.n = 1;
        while (this.n < sz) this.n <<= 1;
        this.tr = new BigInt64Array(this.n * 2).fill(-INF);
    }

    update(i, v, ni, li, ri) {
        if (li === ri) {
            if (v > this.tr[ni]) this.tr[ni] = v;
            return;
        }

        const mid = (li + ri) >> 1;
        if (i <= mid) {
            this.update(i, v, 2 * ni, li, mid);
        } else {
            this.update(i, v, 2 * ni + 1, mid + 1, ri);
        }
        
        const left = this.tr[2 * ni];
        const right = this.tr[2 * ni + 1];
        this.tr[ni] = left > right ? left : right;
    }

    query(l, r, ni, li, ri) {
        if (r < li || ri < l || l > r) {
            return -INF;
        }
        if (l <= li && ri <= r) {
            return this.tr[ni];
        }

        const mid = (li + ri) >> 1;
        const a = this.query(l, r, 2 * ni, li, mid);
        const b = this.query(l, r, 2 * ni + 1, mid + 1, ri);
        return a > b ? a : b;
    }
}




