/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    const arr = []
    const h = {}
    while(n > 0) {
        const d = n % 10
        arr.push(d)
        if(h[d] == null) h[d] = 0
        h[d]++
        n = Math.floor(n / 10)
    }
    const set = new Set(arr)
    let res = 0

    for(const e of set) {
        res += e * h[e]
    }


    return res
};
