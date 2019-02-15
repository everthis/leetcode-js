/**
 * @param {number} n
 * @return {number}
 */
const integerReplacement = function(n, memo = {}) {
    if (n === 1) return 0;
    if (memo[n]) return memo[n];
    memo[n] = n % 2 === 0 ? integerReplacement(n/2, memo) + 1 : Math.min(integerReplacement(n+1, memo), integerReplacement(n-1, memo)) + 1;
    return memo[n]; 
};

// another
const integerReplacement = function(n) {
    let c = 0;
    while (n !== 1) {
        if ((n & 1) === 0) {
            n >>>= 1;
        } else if (n === 3 || ((n >>> 1) & 1) === 0) {
            --n;
        } else {
            ++n;
        }
        ++c;
    }
    return c;  
};
