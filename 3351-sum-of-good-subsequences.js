/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfGoodSubsequences = function (nums) {
    const mod = 1000000007n;
    const MAX = 100005;
    const sum = new Array(MAX).fill(0n);
    const cnt = new Array(MAX).fill(0n);

    for (let i = nums.length - 1; i >= 0; i--) {
        const v = nums[i];
        cnt[v]++;

        const tmp = 1n + cnt[v + 1] + (cnt[v - 1] || 0n);
        cnt[v] += cnt[v + 1];
        cnt[v] += cnt[v - 1] || 0n;

        sum[v] += BigInt(v) * tmp;

        sum[v] += sum[v + 1];
        sum[v] += sum[v - 1] || 0n;

        cnt[v] %= mod;
        sum[v] %= mod;
    }

    return Number(sum.reduce((a, b) => (a + b) % mod, 0n));
}
