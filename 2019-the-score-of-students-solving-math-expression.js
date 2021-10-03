/**
 * @param {string} s
 * @param {number[]} answers
 * @return {number}
 */
const op = {
    '+': ((a, b) => Number(a) + Number(b)),
    '*':((a, b) => a * b),
}
let dp = {};
const dfs = (s) => {
    if(s.length == 0) return {};
    if(s.length == 1) return { [s[0]] : 1};
    const dps = dp[s];
    if(dps) return dps;
    const res = {};
    for(let i = 0; i < s.length - 2; i += 2) {
        const l = dfs(s.substr(0, i + 1))
        const r = dfs(s.substr(i + 2, s.length - i - 2));
        for(let x in l) {
            for(let y in r) {
                const z = op[s[i + 1]](x, y);
                if(z > 1000) continue;
                res[z] = 1;
            }
        }
        
    }
    dp[s] = res;
    return res;
}

const scoreOfStudents = function(s, answers) {
    const correct = eval(s);
    dp = {};
    const allAns = dfs(s);
    let ans = 0;
    answers.forEach(x => {
        if(  x == correct) ans += 5;
        else if(allAns[x]) ans += 2;
    })
    return ans;
};
