/**
 * @param {number[][]} lists
 * @return {number}
 */
var minMergeCost = function(lists) {
    const n = lists.length;
    let all_nums = [];
    for (const lst of lists) {
        all_nums = all_nums.concat(lst.slice());
    }
    all_nums.sort((a, b) => a - b);

    // subsets[subset] = [length, median]
    const subsets = [[0, 0]];
    for (let subset = 1; subset < (1 << n); subset++) {
        const result_len = [...Array(n).keys()]
            .map(i => lists[i].length * (((subset >> i) & 1)))
            .reduce((a, b) => a + b, 0);
        const median_lt = Math.floor((result_len - 1) / 2);

        let low = 0;
        let high = all_nums.length - 1;
        let actual_median = -1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const num = all_nums[mid];
            const num_lt = numLt(lists, subset, num);
            if (num_lt <= median_lt) {
                actual_median = num;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        subsets.push([result_len, actual_median]);
    }

    const MAX = Number.MAX_SAFE_INTEGER;
    const dp = new Array(1 << n).fill(MAX);

    for (let subset = 0; subset < (1 << n); subset++) {
        if (countOnes(subset) <= 1) {
            dp[subset] = 0;
        } else {
            let a = (subset - 1) & subset;
            while (a > 0) {
                const b = subset ^ a;
                const [a_len, a_med] = subsets[a];
                const [b_len, b_med] = subsets[b];
                const cost = a_len + b_len + Math.abs(a_med - b_med);
                dp[subset] = Math.min(dp[subset], dp[a] + dp[b] + cost);
                a = (a - 1) & subset;
            }
        }
    }

    return dp[(1 << n) - 1]; 
};
function numLt(lists, enabled, guess) {
    let result = 0;
    for (let i = 0; i < lists.length; i++) {
        if (((enabled >> i) & 1) === 1) {
            // find the first element >= guess using binary search (partition_point equivalent)
            let arr = lists[i];
            let left = 0, right = arr.length;
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (arr[mid] < guess) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            result += left;
        }
    }
    return result;
}


function countOnes(x) {
    let count = 0;
    while (x > 0) {
        count += x & 1;
        x >>= 1;
    }
    return count;
}
