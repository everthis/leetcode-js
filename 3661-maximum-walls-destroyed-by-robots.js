/**
 * @param {number[]} robots
 * @param {number[]} distance
 * @param {number[]} walls
 * @return {number}
 */
var maxWalls = function(robots, distance, walls) {
    const d = distance
    const n = robots.length;
    const x = new Array(n);
    for (let i = 0; i < n; i++) x[i] = [robots[i], d[i]];
    walls.sort((a, b) => a - b);
    x.sort((a, b) => a[0] - b[0]);
    x.push([1e9, 0]);

    // finds the no of walls in the range [l,r];
    const query = (l, r) => {
        if (l > r) return 0;
        const upperBound = (arr, val) => {
            let low = 0, high = arr.length;
            while (low < high) {
                const mid = (low + high) >> 1;
                if (arr[mid] <= val) low = mid + 1;
                else high = mid;
            }
            return low;
        };
        const lowerBound = (arr, val) => {
            let low = 0, high = arr.length;
            while (low < high) {
                const mid = (low + high) >> 1;
                if (arr[mid] < val) low = mid + 1;
                else high = mid;
            }
            return low;
        };

        const it1 = upperBound(walls, r);
        const it2 = lowerBound(walls, l);
        return it1 - it2;
    };

    const dp = new Array(n);
    for (let i = 0; i < n; i++) dp[i] = [0, 0];

    // base case
    dp[0][0] = query(x[0][0] - x[0][1], x[0][0]);
    if (n > 1) dp[0][1] = query(x[0][0], Math.min(x[1][0] - 1, x[0][0] + x[0][1]));
    else dp[0][1] = query(x[0][0], x[0][0] + x[0][1]);

    // transition
    for (let i = 1; i < n; i++) {
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0]) + query(x[i][0], Math.min(x[i + 1][0] - 1, x[i][0] + x[i][1]));

        dp[i][0] = dp[i - 1][0] + query(Math.max(x[i][0] - x[i][1], x[i - 1][0] + 1), x[i][0]);
        const res = dp[i - 1][1]
            + query(Math.max(x[i][0] - x[i][1], x[i - 1][0] + 1), x[i][0])
            - query(Math.max(x[i][0] - x[i][1], x[i - 1][0] + 1), Math.min(x[i - 1][0] + x[i - 1][1], x[i][0] - 1));
        dp[i][0] = Math.max(res, dp[i][0]);
    }
    return Math.max(dp[n - 1][0], dp[n - 1][1]);  
};
