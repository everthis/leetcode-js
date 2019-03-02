/**
 * @param {string[]} equations
 * @return {boolean}
 */
const equationsPossible = function(equations) {
    const uf = new Array(26).fill(0);
    const aCode = ('a').charCodeAt(0)

    for (let i = 0; i < 26; ++i) uf[i] = i;
    for (let e of equations)
        if (e.charAt(1) === '=')
            uf[find(e.charCodeAt(0) - aCode)] = find(e.charCodeAt(3) - aCode);
    for (let e of equations)
        if (e.charAt(1) === '!' && find(e.charCodeAt(0) - aCode) === find(e.charCodeAt(3) - aCode))
            return false;
    return true;


    function find(x) {
        if (x != uf[x]) uf[x] = find(uf[x]);
        return uf[x];
    }
};
