/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOR = function(grid) {
    const tem = grid.map(row => row.slice())
    const n = tem.length
    let mx = 0

    for(const r of tem) {
        for(const x of r) {
            if(x > mx) mx = x
        }
    }

    let B = 0

    while((1 << B) <= mx) B++

    if(B === 0) B = 1
    let ma = (1 << B) - 1

    for(let i = B - 1; i >= 0; i--) {
        const c = ma & ~(1 << i)
        let ok = true

        for(let j = 0; j < n && ok; j++) {
            let rk = false
            for(const x of tem[j]) {
                if((x & ~c) === 0) {
                    rk = true
                    break
                }
            }
            if(!rk) ok = false
        }

        if(ok) ma = c
    }

    
    return ma
};
