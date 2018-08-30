/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function(S) {
    let res = []
    backtrack(res, "", 0, S)
    return res
};

const backtrack = (res, sol, depth, S) => {
    if (depth == S.length) {
        res.push(sol)
        return
    }
    const c = S[depth]
    if ("1234567890".indexOf(c) != - 1) {
        backtrack(res, sol+c, depth + 1, S)
    } else {
        backtrack(res, sol+c.toLowerCase(), depth + 1, S)
        backtrack(res, sol+c.toUpperCase(), depth + 1, S)
    }
}

console.log(letterCasePermutation("a1b2")) 
console.log(letterCasePermutation("3z4")) 
console.log(letterCasePermutation("12345")) 