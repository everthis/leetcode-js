/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let  mp1 = {} ,mp2 = {}
    for (let i = 0; i < s.length; i++) {
        mp1[s[i]] = i
        mp2[t[i]] = i
    }
    let res = 0
    for (let i = 0; i < s.length; i++) {
        res += Math.abs(mp1[s[i]] - mp2[s[i]])
    }
    return res
};
