/**
 * @param {number[]} strength
 * @param {number} k
 * @return {number}
 */
var findMinimumTime = function(strength, k) {
    strength.sort((a, b) => a - b)
    const n = strength.length, {floor} = Math
    let res = Infinity
    f(0, 1, 0)
    return res

    function f(mask, x, tmp) {
        if(mask === (1 << n) - 1) {
            res = Math.min(res, tmp)
            return
        } 
        let add = 0
        for(let i = 0; i < n; i++) {
            if(mask & (1 << i)) continue
            add = floor((strength[i] + x - 1) / x)
            f(mask | (1 << i), x + k, tmp + add)
        }
    }
};
