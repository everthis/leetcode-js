/**
 * @param {number} n
 * @param {number} k
 * @return {string[]}
 */
var generateValidStrings = function(n, k) {
    const res = []
    const s = []
    dfs(0, n, k, 0, s, res)
    return res

    function dfs(i, n, k, cost, s, res) {
        if(cost > k) return
        if(i === n) {
            res.push(s.join(''))
            return
        }
        s.push('0')
        dfs(i+ 1,n,k,cost,s, res)
        s.pop()
        if(i === 0 || s[s.length - 1] !== '1') {
            s.push('1')
            dfs(i + 1, n,k,cost + i, s, res)
            s.pop()
        }
    }
};
