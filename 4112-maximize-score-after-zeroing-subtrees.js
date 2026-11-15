/**
 * @param {number[]} parent
 * @param {number[]} op
 * @param {number[]} score
 * @return {number}
 */
var maxScore = function(parent, op, score) {
    const n = parent.length
    // const ind = Array(n).fill(0)
    // const cld = Array.from({ length: n }, () => new Set())
    // for(let i = 1; i < n; i++) {
    //     const p = parent[i]
    //     ind[p]++
    //     cld[p].add(i)
    // }
    // let q = []
    // for(let i = 0; i < n; i++) {
    //     if(ind[i] === 0) q.push(i)
    // }
    // // console.log(q)

    // const sum = [...score]

    // while(q.length) {
    //     const tmp = []
    //     const len = q.length

    //     for(let i = 0; i < len; i++) {
    //         const e = q[i]
    //         const p = parent[e]
    //         sum[p] += sum[e]
    //         ind[p]--
    //         if(ind[p] === 0) {
    //             tmp.push(p)
    //         }
    //     }
        
        

    //     q = tmp
    // }
    // console.log(sum)

    const tree = Array.from({ length: n }, () => [])
    for(let i = 1; i < n; i++) {
        tree[parent[i]].push(i)
    }

    return dfs(0, op, score)

    function dfs(u, op, score) {
        let sm = 0
        let mn = Number.MAX_SAFE_INTEGER

        for(const v of tree[u]) {
            const val = dfs(v, op, score)
            sm += val
            mn = Math.min(mn, val)
        }

        if(tree[u].length === 0) return score[u]

        return score[u] + sm - (op[u] === 1 ? mn : Math.min(0, mn))
    }
};
