/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    let s = ''
    let c = 0
    let i = a.length - 1
    let j = b.length - 1
    while(i >= 0 || j >= 0 || c === 1) {
        c += i >= 0 ? +a[i--] : 0
        c += j >= 0 ? +b[j--] : 0
        s = (c % 2 === 1 ? '1' : '0') + s
        c = Math.floor(c / 2)
    }
    return s
};
