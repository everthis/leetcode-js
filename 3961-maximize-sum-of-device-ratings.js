/**
 * @param {number[][]} units
 * @return {number}
 */
var maxRatings = function(units) {
    const row = units.length
    const col = units[0].length

    if(col === 1) {
        return units.reduce((ac, e) => ac + e[0], 0)
    }


    let tm = Infinity
    let tm2 = Infinity
    let sf = 0

    for(const d of units) {
        let min1 = Infinity
        let min2 = Infinity

        for(const u of d) {
            if(u < min1) {
                min2 = min1
                min1 = u
            } else if(u < min2) {
                min2 = u
            }
        }

        if(tm > min1) tm = min1
        if(tm2 > min2) tm2 = min2

        sf += min2
    }

    return tm + sf - tm2
};
