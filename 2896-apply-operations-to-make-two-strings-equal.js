/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} x
 * @return {number}
 */
const minOperations = function (s1, s2, x) {
   const n = s1.length, arr = []
   for(let i = 0; i < n; i++) {
     if(s1[i] !== s2[i]) arr.push(i)
   }
   const len = arr.length
   if(len % 2) return -1
   const cache = new Map()
   return dfs(len - 1)

   function dfs(i) {
     if(i < 0) return 0
     if(i === 0) return x / 2
     if(cache.has(i)) return cache.get(i)
     const res = Math.min(dfs(i - 2) + arr[i] - arr[i - 1], dfs(i - 1) + x/2)
     cache.set(i, res)
     return res
   }
}

// another


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
        /*
            # 这里没有删除指的是没有用第二种操作
            # 如果目前考虑的元素个数为奇数，如果最后一个位置没有被删除，则前面位置都被删除了，那么当前的成本是 dp[i]
        */
        if (i % 2 === 0) {
            dp[i + 1] = dp[i];
        } else {
        /*
            # 如果目前考虑的元素个数为偶数，如果最后一个位置没有被删除，则需要与前面的某项进行配对删除（第一种操作），
            # 那么当前的成本是 dp[i] + x，即前面有位置没被删除的成本 + 这次删除的成本，因为要删去最后两项
        */
            dp[i + 1] = dp[i] + x;
        }
        /*
            # 考虑使用第二种操作
        */
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
