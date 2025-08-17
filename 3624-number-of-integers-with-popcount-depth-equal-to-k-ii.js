/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var popcountDepth = function(nums, queries) {
    let n = nums.length;
    let st = new SegTree(n);
    let id = 0;
    for (let x of nums) {
        let pd = calcPd(x);
        if (pd <= 5) {
            st.update(id, pd);
        }
        id++;
    }
    let res = [];
    for (let v of queries) {
        if (v[0] === 1) {
            res.push(st.calc(v[1], v[2] + 1, v[3]));
        } else {
            let pd = calcPd(v[2]);
            if (pd <= 5) {
                st.update(v[1], pd);
            }
        }
    }
    return res
};
class Node {
    constructor(n) {
        this.dep_mask = new Array(n).fill(0);
        this._n = n;
    }

    setPd(x) {
        this.dep_mask = x;
    }

    incPd(pd) {
        this.dep_mask[pd]++;
    }

    getPd() {
        return this.dep_mask;
    }

    getPdAt(id) {
        return this.dep_mask[id];
    }

    clearPd() {
        for (let i = 0; i < this._n; ++i) {
            this.dep_mask[i] = 0;
        }
    }
}

class SegTree {
    constructor(n) {
        this.sz = 1;
        while (this.sz < n) {
            this.sz *= 2;
        }
        this.T = new Array(2 * this.sz).fill(null).map(() => new Node(6));
    }

    mergePd(a, b) {
        let c = new Array(6).fill(0);
        for (let i = 0; i < 6; ++i) {
            c[i] = a.dep_mask[i] + b.dep_mask[i];
        }
        return c;
    }

    update(id, pd) {
        this.updateRec(0, 0, this.sz, id, pd);
    }

    calc(l, r, k) {
        return this.calcRec(0, 0, this.sz, l, r, k);
    }

    updateRec(x, l, r, pos, pd) {
        if ((r - l) === 1) {
            this.T[x].clearPd();
            this.T[x].incPd(pd);
            return;
        }
        let m = Math.floor((l + r) / 2);
        if (pos < m) {
            this.updateRec(2 * x + 1, l, m, pos, pd);
        } else {
            this.updateRec(2 * x + 2, m, r, pos, pd);
        }
        this.T[x].setPd(this.mergePd(this.T[2 * x + 1], this.T[2 * x + 2]));
    }

    calcRec(x, l, r, ql, qr, req_pd) {
        if (ql >= r || qr <= l) {
            return 0;
        }
        if (l >= ql && r <= qr) {
            return this.T[x].getPdAt(req_pd);
        }
        let m = Math.floor((l + r) / 2);
        let le = this.calcRec(2 * x + 1, l, m, ql, qr, req_pd);
        let ri = this.calcRec(2 * x + 2, m, r, ql, qr, req_pd);
        return le + ri;
    }
}

function calcPd(x) {
    let dep = 0;
    while (x > 1) {
        x = x.toString(2).split('').reduce((count, bit) => count + Number(bit), 0);
        dep++;
    }
    return dep;
}
