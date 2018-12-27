/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    const len = s.length
    let tmp = ''
    for(let i = 1; i <= len; i++) {
        tmp = s.substr(0, i)
        if (tmp.length === len) {
            return false
        }
        if (s === genStr(tmp, len)) {
            return true
        }
    }
    return false
};
function genStr(sub, limit) {
    let str = sub
    while(str.length < limit) {
        str += sub
    }
    return str
}
