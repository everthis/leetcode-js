/**
 * @param {number[]} value
 * @param {number[]} limit
 * @return {number}
 */
var maxTotal = function(value, limit) {
    const umap = new Map()
    let res = 0
    const n = value.length

    for (let i = 0; i < n; i++) {
        if (!umap.has(limit[i])) {
            umap.set(limit[i], [])
        }
        umap.get(limit[i]).push(value[i])
    }

    for (const [lim, pq] of umap) {
        pq.sort((a, b) => b - a);
        for (let i = 0; i < lim && pq.length > 0; i++) {
            res += pq.shift()
        }
    }

    return res
};
