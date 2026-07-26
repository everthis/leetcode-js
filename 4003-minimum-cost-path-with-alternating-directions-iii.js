/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} penalty
 * @return {number}
 */
var minCost = function(m, n, penalty) {
    const moves = [[[0, -1], [-1, 0]], [[0, 1], [1, 0]]]
    const pq = new MinPriorityQueue((el) => el[2])
    const dist = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(2).fill(Infinity)))
    pq.enqueue([0, 0, 1, 1])
    dist[0][0][0] = 1
    while(pq.size()) {
        const [ci, cj, cc, ca] = pq.dequeue()
        const amvs = moves[ca % 2]
        // allowed moves
        for(const [mi, mj] of amvs) {
            const [ni, nj] = [mi + ci, mj + cj]
            if(ni >= 0 && nj >= 0 && ni < m && nj < n) {
                const cost = cc + (ni + 1) * (nj + 1)
                if(dist[ni][nj][ca % 2] > cost) {
                    dist[ni][nj][ca % 2] = cost
                    pq.enqueue([ni, nj, cost, ca + 1])
                }
            }
        }
        // not allowed
        const namvs = moves[1 - (ca % 2)]
        for(const [mi, mj] of namvs) {
            const [ni, nj] = [mi + ci, mj + cj]
            if(ni >= 0 && nj >= 0 && ni < m && nj < n) {
                const pen = penalty[ci][cj]
                const cost = cc + (ni + 1) * (nj + 1) + pen
                if(dist[ni][nj][ca % 2] > cost) {
                    dist[ni][nj][ca % 2] = cost
                    pq.enqueue([ni, nj, cost, ca + 1])
                }
            }
        }
        const stayCost = cc + penalty[ci][cj]
        if(dist[ci][cj][ca % 2] > stayCost) {
            dist[ci][cj][ca % 2] = stayCost
            pq.enqueue([ci, cj, stayCost, ca + 1])
        }
    }
    return Math.min(dist[m - 1][n - 1][0], dist[m - 1][n - 1][1])
};
