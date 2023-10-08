/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const differenceOfSums = function(n, m) {
    let num1 = 0, num2 = 0
    for(let i = 1; i <= n; i++) {
        if(i % m !== 0) num1 += i
        if(i % m === 0) num2 += i
    }
    return num1 - num2
};
