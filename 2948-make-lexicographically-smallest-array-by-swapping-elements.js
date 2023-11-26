//////////////////////////// Template /////////////////////////////////
function DJSet(n) {
    let parent = Array(n).fill(-1);
    return { find, union, count, equiv, par, grp }
    function find(x) {
        return parent[x] < 0 ? x : parent[x] = find(parent[x]);
    }
    function union(x, y) {
        x = find(x);
        y = find(y);
        if (x == y) return false;
        if (parent[x] < parent[y]) [x, y] = [y, x];
        parent[x] += parent[y];
        parent[y] = x;
        return true;
    }
    function count() { // total groups
        return parent.filter(v => v < 0).length;
    }
    function equiv(x, y) { // isConnected
        return find(x) == find(y);
    }
    function par() {
        return parent;
    }
    function grp() {
        let groups = [];
        for (let i = 0; i < n; i++) groups.push([]);
        for (let i = 0; i < n; i++) groups[find(i)].push(i); // sorted and unique
        return groups;
    }
}
////////////////////////////////////////////////////////////////
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    let d = nums.map((x, i) => [x, i]).sort((x, y) => x[0] - y[0] || x[1] - y[1]), pairs = [];
    for (let i = 1; i < nums.length; i++) {
        if (d[i][0] - d[i - 1][0] <= limit) pairs.push([d[i - 1][1], d[i][1]]);
    }
    return LexicalSmallestArrayWithSwaps(nums, pairs)
};


// reference: https://leetcode.com/problems/smallest-string-with-swaps/
function LexicalSmallestArrayWithSwaps (a, pairs) {
    let n = a.length, ds = new DJSet(n), res = Array(n).fill(0);
    for (const [x, y] of pairs) ds.union(x, y);
    let groups = ds.grp().filter(e => e.length);
    for (const group of groups) {
        let ga = [];
        for (let i of group) ga.push(a[i]);
        ga.sort((x, y) => x - y);
        for (let i = 0; i < group.length; i++) res[group[i]] = ga[i];
    }
    return res;
};

