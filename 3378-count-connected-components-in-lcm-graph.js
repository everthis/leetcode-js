/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var countComponents = function(nums, threshold) {
    const dsu = new DSU(threshold);
    const n = nums.length;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= threshold) {
            for (let j = nums[i]; j <= threshold; j += nums[i]) {
                dsu.join(nums[i], j);
            }
        }
    }

    const st = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > threshold) res++;
        else st.add(dsu.findParent(nums[i]));
    }

    res += st.size;
    return res;  
};
class DSU {
    constructor(n) {
        this.parent = new Array(n + 1).fill(-1);
    }

    findParent(x) {
        if (this.parent[x] === -1) return x;
        return this.parent[x] = this.findParent(this.parent[x]);
    }

    join(x, y) {
        const X = this.findParent(x);
        const Y = this.findParent(y);
        if (X === Y) return false;
        this.parent[X] = Y;
        return true;
    }
}
