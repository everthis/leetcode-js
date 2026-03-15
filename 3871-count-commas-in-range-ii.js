/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
  let res = 0
    let t = 1000

    while(t <= n) {
        res += n - t + 1
        if(t > n / 1000) break
        t *= 1000
    }

    return res
};
