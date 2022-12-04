class UnionFind {
    constructor() {
      this.sizes = new Map()
      this.parents = new Map()
    }

    find(x){
        if (x !== (this.parents.get(x) ?? x)) {
            this.parents.set(x, this.find(this.parents.get(x) ?? x));
        }
        return this.parents.get(x) ?? x;
    }
    size(x) {
        return (this.sizes.get(this.find(x)) ?? 1);
    }
    connected(p, q) {
        return this.find(p) == this.find(q);
    }
    union(a, b) {
        const fa = this.find(a);
        const fb = this.find(b);
        if (fa == fb) {
            return;
        }
        const sa = this.sizes.get(fa) ?? 1;
        const sb = this.sizes.get(fb) ?? 1;

        if (sa < sb) {
            this.parents.set(fa, fb);
            this.sizes.set(fb, sb + sa);
        } else {
            this.parents.set(fb, fa);
            this.sizes.set(fa, sb + sa);
        }
    }
}
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const uf = new UnionFind();

    for (const [a, b] of roads) {
        uf.union(a, b);
    }
    let ans = Infinity;

    for (const [i, j, d] of roads) {
        if (uf.connected(1, i) && uf.connected(1, j)) {
            ans = Math.min(ans, d);
        }
    }
    return ans;
};
