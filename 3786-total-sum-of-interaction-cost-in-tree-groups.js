/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} group
 * @return {number}
 */
var interactionCosts = function(n, edges, group) {
  const adj = Array.from({ length: n }, () => [])
    for(const [u, v] of edges) {
        adj[u].push(v)
        adj[v].push(u)
    }
    const total = new Array(21).fill(0)
    for(const g of group) total[g]++
    let res = 0n

    dfs(0, -1)
    return Number(res)

    function dfs(u, parent) {
        const cnt = new Array(21).fill(0n)
        cnt[group[u]] = 1n
        for(const v of adj[u]) {
            if(v === parent) continue
            const childCnt = dfs(v, u)

            for(let g = 1; g <= 20; g++) {
                const c = childCnt[g]
                if(c > 0n) {
                    res += c * BigInt(total[g] - Number(c))
                    cnt[g] += c
                }
            }
        }
        return cnt
    }
};
