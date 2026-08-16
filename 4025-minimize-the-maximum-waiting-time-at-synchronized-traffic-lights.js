/**
 * @param {number} period
 * @param {number[]} lights
 * @param {number[]} arrivalTime
 * @return {number}
 */
var minPenalty = function(period, lights, arrivalTime) {
    let pe = period, li = lights, at = arrivalTime
    at = at.map(x => x % pe)
    li.sort((a, b) => a - b)
    at.sort((a, b) => a - b)
    let l = 0, h = 0

    for(let it of at) {
        if(it >= li[li.length - 1]) l = Math.max(l, pe -it)
        if(it >= li[0]) h = Math.max(h, pe -it)
    }

    let res = 0

    while(l <= h) {
        const mid = Math.floor(l + (h - l) / 2)
        if(pos(mid, pe,li, at)) {
            res= mid
            h = mid - 1
        } else l = mid+ 1
    }

    return res


    function pos(mid,pe,li,at) {
        let m = li.length
        let n = at.length
        let j = 0, i = 0

        for(i = 0; i < n && j < m; i++) {
            if(at[i] < li[j]) continue
            else if(pe - at[i] <= mid) continue
            else j++
        }

        return i === n
    }
};
