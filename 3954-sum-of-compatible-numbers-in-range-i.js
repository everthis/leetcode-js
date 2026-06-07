/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumOfGoodIntegers = function(n, k) {
    let res = 0

    for(let i = 1; i <= n + k; i ++) {
        if(Math.abs(n - i) <= k && ((n & i) === 0)) res += i
    }


    return res
};
