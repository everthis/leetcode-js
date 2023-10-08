/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} x
 * @return {number}
 */
var minOperations = function(s1, s2, x) {
    const n = s1.length;
    const idxs = [];
    for (let i = 0; i < n; i++) {
        if (s1[i] !== s2[i]) {
            idxs.push(i);
        }
    }
    const k = idxs.length;
    if (k % 2) {
        return -1;
    }
    const dp = new Array(k + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < k; i++) {
        if (i % 2 === 0) {
            dp[i + 1] = dp[i];
        } else {
            dp[i + 1] = dp[i] + x;
        }
        if (i) {
            dp[i + 1] = Math.min(dp[i + 1], dp[i - 1] + idxs[i] - idxs[i - 1]);
        }
    }
    return dp[k];
};

// another

/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} x
 * @return {number}
 */
const minOperations = function(s1, s2, x) {
    const diffs = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diffs.push(i);
        }
    }

    if (diffs.length % 2 === 1) {
        return -1;
    }

    const cache = new Map();
    function bestCostUpTo(i) {
        if (i === 0) {
            return x / 2;
        }
        if (i === -1) {
            return 0;
        }
        if (cache.has(i)) {
            return cache.get(i);
        }
        const cost = Math.min(
            bestCostUpTo(i - 1) + x / 2,
            bestCostUpTo(i - 2) + diffs[i] - diffs[i - 1]
        );
        cache.set(i, cost);
        return cost;
    }

    return Math.floor(bestCostUpTo(diffs.length - 1));
};
