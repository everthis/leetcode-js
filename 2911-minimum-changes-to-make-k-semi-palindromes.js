/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function(s, k) {
  const ins =  new Solution()
  return ins.minimumChanges(s,k)
};

class Solution {
    constructor() {
        this.fac = new Array(210).fill(0).map(() => []); // A vector of vectors to store factors of string lengths.
    }

    num(st) {
        const n = st.length;
        let ans = 1e9;
        for (const it of this.fac[st.length]) {
            const nu = Math.floor(n / it);
            let cur = 0;
            for (let i = 0; i < Math.floor(nu / 2); i++) {
                const i2 = nu - i - 1;
                for (let j = 0; j < it; j++) {
                    if (st[i * it + j] !== st[i2 * it + j]) {
                        cur++;
                    }
                }
            }
            ans = Math.min(ans, cur);
        }
        return ans;
    }

    minimumChanges(st, k) {
        const n = st.length;

        for (let i = 2; i <= n; i++) {
            this.fac[i] = [];
            for (let j = 1; j < i; j++) {
                if (i % j === 0) {
                    this.fac[i].push(j);
                }
            }
        }

        const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(1e9));
        dp[0][0] = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j <= i; j++) {
                const cur = st.slice(j, i + 1);
                const add = this.num(cur);
                for (let l = 0; l < k; l++) {
                    dp[i + 1][l + 1] = Math.min(dp[i + 1][l + 1], dp[j][l] + add);
                }
            }
        }

        return dp[n][k];
    }
}
