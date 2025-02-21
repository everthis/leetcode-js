/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumIncrements = function(nums, target) {
    const k = target.length;
    const mpp = new Map();

    for (let mask = 1; mask < (1 << k); mask++) {
        const subset = [];
        for (let i = 0; i < k; i++) {
            if (mask & (1 << i)) {
                subset.push(target[i]);
            }
        }
        let currlcm = subset[0];
        for (let j = 1; j < subset.length; j++) {
            currlcm = lcm(currlcm, subset[j]);
        }
        mpp.set(mask, currlcm);
    }

    const fullmask = (1 << k) - 1;
    const dp = new Array(1 << k).fill(Infinity);
    dp[0] = 0;

    for (const num of nums) {
        const maskcost = [];
        for (const [mask, lcmval] of mpp) {
            const rm = num % lcmval;
            const cost = (rm === 0) ? 0 : (lcmval - rm);
            maskcost.push([mask, cost]);
        }

        const newdp = [...dp];
        for (let prevmask = 0; prevmask < (1 << k); prevmask++) {
            if (dp[prevmask] === Infinity) continue;
            for (const [mask, cost] of maskcost) {
                const nmask = prevmask | mask;
                const ncost = dp[prevmask] + cost;
                if (ncost < newdp[nmask]) {
                    newdp[nmask] = ncost;
                }
            }
        }

        dp.splice(0, dp.length, ...newdp);
    }

    return dp[fullmask] === Infinity ? -1 : dp[fullmask];
};
function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a / gcd(a, b)) * b;
}
