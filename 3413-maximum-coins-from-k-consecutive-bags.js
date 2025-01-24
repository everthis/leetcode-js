/**
 * @param {number[][]} coins
 * @param {number} k
 * @return {number}
 */
var maximumCoins = function(coins, k) {
    coins.sort((a, b) => a[0] - b[0]);
    const n = coins.length;

    let res = 0, cur = 0;
    for (let i = 0, j = 0; i < n; ++i) {
        while (j < n && coins[j][1] <= coins[i][0] + k - 1) {
            cur +=(coins[j][1] - coins[j][0] + 1) * (coins[j][2]);
            j++;
        }
        if (j < n) {
            const part =  Math.max(0, coins[i][0] + k - 1 - coins[j][0] + 1) * (coins[j][2]);
            res = Math.max(res, cur + part);
        }
        cur -=  (coins[i][1] - coins[i][0] + 1) * (coins[i][2]);
    }

    cur = 0;
    for (let i = 0, j = 0; i < n; ++i) {
        cur += 1 * (coins[i][1] - coins[i][0] + 1) * (coins[i][2]);
        while (coins[j][1] < coins[i][1] - k + 1) {
            cur -= 1 * (coins[j][1] - coins[j][0] + 1) * (coins[j][2]);
            j++;
        }
        const part = 1 * Math.max(0, coins[i][1] - k - coins[j][0] + 1) * (coins[j][2]);
        res = Math.max(res, cur - part);
    }

    return res;
};
