/**
 * @param {number} n
 * @param {number} start
 * @param {number[][]} requests
 * @return {number}
 */
var elevatorRequests = function(n, start, requests) {
    const m = requests.length;
    const arrival = requests.map(r => r[0]);
    const floor = requests.map(r => r[1]);
    
    const dist = Array.from({length: m}, () => Array(m).fill(0));
    for (let i = 0; i < m; i++)
        for (let j = 0; j < m; j++)
            dist[i][j] = Math.abs(floor[i] - floor[j]);
    
    const INF = Number.MAX_SAFE_INTEGER; // or 1e18
    const full = (1 << m) - 1;
    const dp = Array.from({length: 1 << m}, () => Array(m).fill(INF));
    
    for (let i = 0; i < m; i++) {
        dp[1 << i][i] = Math.max(Math.abs(start - floor[i]), arrival[i]);
    }
    
    for (let mask = 0; mask <= full; mask++) {
        for (let last = 0; last < m; last++) {
            const cur = dp[mask][last];
            if (cur === INF) continue;
            let rem = full ^ mask;
            while (rem) {
                const bit = rem & -rem;
                const nxt = Math.floor(Math.log2(bit));
                rem -= bit;
                
                const travel = cur + dist[last][nxt];
                const finish = Math.max(travel, arrival[nxt]);
                const nmask = mask | bit;
                if (finish < dp[nmask][nxt]) {
                    dp[nmask][nxt] = finish;
                }
            }
        }
    }
    
    return Math.min(...dp[full]);
};
