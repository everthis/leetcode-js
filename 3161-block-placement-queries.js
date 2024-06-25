/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function(queries) {
    const max = queries.reduce((max, [_, x, sz = 0]) => Math.max(max, x, sz), 0) + 1;
    const segmentTree = new SegmentTree(max)
    const results = [];
    for (const [type, x, sz = 0] of queries) {
        if (type === 1) {
            segmentTree.add(x);
        } else {
            results.push(segmentTree.query(x)[2] >= sz)
        }
    }
    return results;
};

class SegmentTree {
    n = 0
    minBlock = []
    maxBlock = []
    max = []

    constructor(n) {
        this.n = n
        this.minBlock = new Array(2 * 2 ** Math.ceil(Math.log2(n))).fill(0);
        this.maxBlock = new Array(2 * 2 ** Math.ceil(Math.log2(n))).fill(0);
        this.max = new Array(2 * 2 ** Math.ceil(Math.log2(n))).fill(1);
        this.populate()
    }

    populate(idx = 0, l = 0, r = this.n - 1) {
        if (l === r) return;
        const mid = l + r >> 1;
        this.populate(idx * 2 + 1, l, mid);
        this.populate(idx * 2 + 2, mid + 1, r);
        this.max[idx] = r - l + 1;
    }

    update(idx, l, r) {
        const left = idx * 2 + 1;
        const leftSplit = this.maxBlock[left] > 0;
        const right = idx * 2 + 2;
        const rightSplit = this.minBlock[right] > 0;

        if (leftSplit && rightSplit) {
            this.minBlock[idx] = this.minBlock[left];
            this.maxBlock[idx] = this.maxBlock[right];
            this.max[idx] = Math.max(this.max[left], this.max[right], this.minBlock[right] - this.maxBlock[left]);
        } else if (leftSplit) {
            this.minBlock[idx] = this.minBlock[left];
            this.maxBlock[idx] = this.maxBlock[left];
            this.max[idx] = r - this.maxBlock[left] + 1;
        } else if (rightSplit) {
            this.minBlock[idx] = this.minBlock[right];
            this.maxBlock[idx] = this.maxBlock[right];
            this.max[idx] = this.minBlock[right] - l;
        }
    }


    add(x, idx = 0, l = 0, r = this.n - 1) {
        if (l === r) {
            this.minBlock[idx] = x;
            this.maxBlock[idx] = x;
            return;
        }
        const mid = l + r >> 1;
        if (x <= mid + 1) this.add(x, idx * 2 + 1, l, mid);
        else this.add(x, idx * 2 + 2, mid + 1, r);
        this.update(idx, l, r)
    }

    query(x, idx = 0, l = 0, r = this.n - 1) {
        if (x <= l) return [0, 0, 0];
        if (x > r) return [this.minBlock[idx], this.maxBlock[idx], this.max[idx]];
        const mid = l + r >> 1;
        if (x <= mid + 1) return this.query(x, idx * 2 + 1, l, mid);
        const [lMinBlock, lMaxBlock, lMax] = this.query(x, idx * 2 + 1, l, mid);
        const [rMinBlock, rMaxBlock, rMax] = this.query(x, idx * 2 + 2, mid + 1, r);
        const leftEnd = lMaxBlock || l;
        return [
            lMinBlock || rMinBlock,
            rMaxBlock || lMaxBlock,
            Math.max(lMax, rMax, (rMinBlock ? Math.min(rMinBlock, x) : x) - leftEnd)
        ]
    }
}
