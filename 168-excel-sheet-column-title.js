/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function(n) {
    if (n === 0) {
        return ''
    }
    const res = [];
    const hash = {};
    ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('').forEach((el,idx) => {
        hash[idx] = el
    })
 
    while(n > 0) {
        n--;
        res.unshift(hash[n % 26]);
        n = Math.floor(n / 26);
    }

    return res.join('')
};
