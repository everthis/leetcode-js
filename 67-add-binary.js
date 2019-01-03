/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    const aLen = a.length
    const bLen = b.length
    
    const len = Math.max(aLen, bLen)
    const as = a.padStart(len, '0')
    const bs = b.padStart(len, '0')

    let ext = 0
    const res = []
    for(let i = len - 1; i >= 0; i--) {
        let tmp = ext

        if (as[i] === '1' && bs[i] === '1') {
            ext = 1
            res.push(''+tmp)
        } else {
            let sum = +as[i] + (+bs[i]) + (+tmp)
            if (sum === 2) {
                ext = 1
                res.push('0')
            } else {
                ext = 0
                res.push(''+sum)
            }
        }
    }
    return ext === 1 ? '1' + res.reverse().join('').trim() : res.reverse().join('').trim()
};
