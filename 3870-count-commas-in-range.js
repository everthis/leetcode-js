/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    const a = Math.floor(n / 1000)
    const b = (n % 1000) + 1
    if(a === 0) return 0
    return (a - 1) * 1000 + b
};
