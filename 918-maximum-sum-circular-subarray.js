/**
 * @param {number[]} A
 * @return {number}
 */
const maxSubarraySumCircular = function(A) {
    let total = 0, maxSum = -30000, curMax = 0, minSum = 30000, curMin = 0;
    for (let a of A) {
        curMax = Math.max(curMax + a, a);
        maxSum = Math.max(maxSum, curMax);
        curMin = Math.min(curMin + a, a);
        minSum = Math.min(minSum, curMin);
        total += a;
    }
    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
}
