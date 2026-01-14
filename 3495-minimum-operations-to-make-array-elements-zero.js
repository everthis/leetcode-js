/**
 * @param {number[][]} queries
 * @return {number}
 */
var minOperations = function(queries) {
    let res = 0
    const {floor: flr, max, min, log, ceil} = Math
    const limit = ceil(log(1e9) / log(4)) + 1
    for(const [l, r] of queries) {
        let ops = 0
        let prev = 1

        for(let d = 1; d < limit; d++) {
            const cur = prev * 4
            const ll = max(l, prev)
            const rr = min(r, cur - 1)
            if(rr >= ll) {
                ops += (rr - ll + 1) * d
            } 
            prev = cur
        }

        res += flr((ops + 1) / 2)
    }

    return res
};
