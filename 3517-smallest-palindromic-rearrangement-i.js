/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const n = s.length
    const pre = s.substring(0, Math.floor(n / 2))
    const left = Array.from(pre).sort().join('')
    if (n % 2 === 0) {
        return `${left}${left.split('').reverse().join('')}`
    } else {
        return `${left}${s[Math.floor(n / 2)]}${left.split('').reverse().join('')}`
    }
};
