/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    return Array.from(s).reduce((sum, ch, i) => {
        const pos = 'z'.charCodeAt(0) - ch.charCodeAt(0) + 1
        return sum + pos * (i + 1)
    }, 0)
};
