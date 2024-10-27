/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const a = nums
    let n = a.length,
        ans = 0,
        M = 1e9 + 7,
        dp = Array.from({ length: n }, () =>
            Array.from({ length: 1 + Math.max(...a) }, () =>
                new Array(1 + Math.max(...a)).fill(-1)
            )
        )

    let recu = (idx, gcd_1, gcd_2) => {
        if (idx === n)
            return (gcd_1 === gcd_2 && gcd_1 !== 0)

        if (dp.at(idx).at(gcd_1).at(gcd_2) !== -1)
            return dp.at(idx).at(gcd_1).at(gcd_2)

        let ans = recu(idx + 1, gcd_1, gcd_2) +
                  recu(idx + 1, Math.gcd(gcd_1, a.at(idx)), gcd_2) +
                  recu(idx + 1, gcd_1, Math.gcd(gcd_2, a.at(idx)))
        ans %= M

        return dp[idx][gcd_1][gcd_2] = ans
    }

    return recu(0, 0, 0)   
};
Math.gcd = function(a, b) {
    if (b === 0)
        return a
    return Math.gcd(b, a % b)
}
